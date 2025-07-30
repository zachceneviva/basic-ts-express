import pino from 'pino';

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'UTC:yyyy-mm-dd HH:MM:ss.l',
      ignore: 'pid,hostname',
    },
  },
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
});

export default logger;
