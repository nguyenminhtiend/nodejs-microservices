if (process.env.NODE_ENV === 'development') {
  require('dotenv').config(); //eslint-disable-line
}

const createServer = require('./createServer');

const name = process.argv[2];
const services = [
  {
    name: 'AuthService',
    folder: 'auth-service',
    port: 3001,
    basePath: '/authentication',
  }, {
    name: 'DepartmentService',
    folder: 'department-service',
    port: 3000,
    basePath: '/department',
  },
];

const options = services.find((x) => x.name === name);

createServer(options);
