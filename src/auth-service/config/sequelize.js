const path = require('path');

module.exports = {
  config: path.resolve('src', 'authService', 'config', 'index.js'),
  'migrations-path': path.resolve('src', 'authService', 'migrations'),
  'models-path': path.resolve('src', 'authService', 'models'),
};
