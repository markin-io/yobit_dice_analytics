const winston = require('winston');

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      colorize: true,
      json: false,
      level: 'silly'
    })
  ]
});

logger.stream = {
  write: (message) => logger.info(message)
};

module.exports = logger;
