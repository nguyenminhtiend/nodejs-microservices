const path = require('path');

module.exports = {
  config: path.resolve('src', 'auth-service', 'config', 'index.js'),
  'migrations-path': path.resolve('src', 'auth-service', 'migrations'),
  'models-path': path.resolve('src', 'auth-service', 'models'),
};
