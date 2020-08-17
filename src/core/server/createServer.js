const http = require('http');
const { createTerminus } = require('@godaddy/terminus');
const createApp = require('../app');
const { logger } = require('../utils');

const { NODE_ENV } = process.env;

module.exports = async ({
  name, folder, port, basePath,
}) => {
  const app = createApp({ folder, basePath });
  const server = http.createServer(app);

  createTerminus(server, {
    signals: ['SIGINT', 'SIGTERM'],
    healthChecks: {
      '/': () => null,
    },
    onSignal: async () => {
      logger.info('Stopping server!');
    },
  });

  server.listen(port, () => {
    logger.info(`${name} (${NODE_ENV}) started on ${port}`);
  });
};
