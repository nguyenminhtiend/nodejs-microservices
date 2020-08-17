if (process.env.NODE_ENV === 'development') {
  require('dotenv').config(); //eslint-disable-line
}

const createServer = require('./createServer');

const name = process.argv[2];
const services = [
  {
    name: 'AuthService',
    folder: 'authService',
    port: 3001,
    basePath: '/auth',
  }, {
    name: 'UserService',
    folder: 'userService',
    port: 3000,
    basePath: '/user',
  },
];

const options = services.find((x) => x.name === name);

createServer(options);
