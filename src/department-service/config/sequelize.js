const path = require('path');

module.exports = {
  config: path.resolve('src', 'department-service', 'config', 'index.js'),
  'migrations-path': path.resolve('src', 'department-service', 'migrations'),
  'models-path': path.resolve('src', 'department-service', 'models'),
};
