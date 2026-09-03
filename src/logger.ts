import pino from 'pino';

// Silent during tests (Jest sets NODE_ENV=test automatically) so request
// logs don't clutter test output -- everywhere else, structured JSON logs.
export const logger = pino({
  level: process.env.NODE_ENV === 'test' ? 'silent' : 'info',
});
