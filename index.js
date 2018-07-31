import dotenv from 'dotenv';
import moment from 'moment';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const { Client } = require('pg');

dotenv.load();

const DATABASE_WRITE_INTERVAL = 5 * 1000;
const RUNNING_TIME = 60 * 60 * 1000;

let startTime;

const run = async () => {
  try {
    const dbClient = await postgresConnect();
    const wsClient = initializeWebSocketClient();
    const gamesDataPool = [];
    let recordsWritten = 0;
    startTime = new Date();

    wsClient.onopen = () => {
      console.log('WebSocket Client Connected');
      wsClient.send(JSON.stringify({ event: "pusher:subscribe", data: { channel: "dice_BTC" } }));
    };

    wsClient.onmessage = (e) => {
      if (typeof e.data === 'string') {
        const message = e.data;
        const messageData = JSON.parse(JSON.parse(message).data);
        'win' in messageData &&
        gamesDataPool.push(messageData);
      }
    };

    wsClient.onclose = async () => {
      console.log('WebSocket Client Closed');
      await postgresDisconnect(dbClient);
    };

    const writeInterval = setInterval(async () => {
      const toWrite = gamesDataPool.splice(0, gamesDataPool.length);
      const workingTime = new Date() - startTime;
      console.log(`Writing ${toWrite.length} records. Working time is: ${moment.utc(workingTime).format('HH:mm:ss')}`);
      await writeGamesResult(dbClient, toWrite);
      recordsWritten += toWrite.length;
    }, DATABASE_WRITE_INTERVAL);

    setTimeout(() => {
      console.log(`Written ${recordsWritten} records.`);
      clearInterval(writeInterval);
      wsClient.close();
    }, RUNNING_TIME);

  } catch (error) {
    console.error(error);
    process.exit(0);
  }

};

const writeGamesResult = async (client, gamesResults) => {
  const formattedResults = gamesResults.map(formatGameResult);
  const valuesQuery = formattedResults.reduce((string, item, i, self) => {
    string += `(${item.join(',')})${ i < self.length - 1 ? ',' : ''}`;
    return string;
  }, '');

  const query =  `INSERT INTO games(win, did, time, nick, imgid, cur, bet, tar, roll, pr) VALUES ${valuesQuery}`;
  await client.query(query);
};

const initializeWebSocketClient = () => {
  const client = new W3CWebSocket(process.env.WS_SERVER, 'echo-protocol');

  client.onerror = function() {
    console.log('Connection Error');
  };

  return client;
};

const postgresConnect = async () => {
  const client = new Client();
  await client.connect();
  console.log('Database connected');
  return client;
};

const postgresDisconnect = async (client) => {
  console.log('Database connection closed');
  await client.end();
};


const formatGameResult = (data) => {
  const { win, did, time, nick, imgid, cur, bet, tar, roll, pr } = data;

  const formattedData = {
    win: !!win,
    did,
    time: `to_timestamp(${time})`,
    nick: `'${nick}'`,
    imgid,
    cur: `'${cur}'`,
    bet: Number(bet),
    tar: tar === '>52',
    roll: Number(roll),
    pr: Number(pr)
  };

  return Object.values(formattedData);
};

run().then(() => {});