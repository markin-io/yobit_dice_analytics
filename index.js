import dotenv from 'dotenv';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const { Client } = require('pg');

dotenv.load();

const run = async () => {
  // const client = new Client();
  // await client.connect();
  //
  // const res = await client.query('SELECT $1::text as message', ['Hello world!']);
  // console.log(res.rows[0].message); // Hello world!
  // await client.end();

  const client = new W3CWebSocket(process.env.WS_SERVER, 'echo-protocol');

  client.onerror = function() {
    console.log('Connection Error');
  };

  client.onopen = function() {
    console.log('WebSocket Client Connected');

    // function sendNumber() {
    //   if (client.readyState === client.OPEN) {
    //     var number = Math.round(Math.random() * 0xFFFFFF);
    //     client.send(number.toString());
    //     setTimeout(sendNumber, 1000);
    //   }
    // }
    // sendNumber();
  };

  client.onclose = function() {
    console.log('echo-protocol Client Closed');
  };

  client.onmessage = function(e) {
    if (typeof e.data === 'string') {
      console.log("Received: '" + e.data + "'");
    }
  };
};


run().then(() => {});