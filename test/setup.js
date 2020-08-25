const path = require('path');
const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const chaiLike = require('chai-like');

require('dotenv').config({
  path: path.resolve(process.cwd(), '.env.test'),
});
const startApp = require('../src/core/app');

chai.use(chaiHttp);
chai.use(chaiLike);

const services = [
  {
    name: 'AuthService',
    folder: 'auth-service',
    basePath: '/authentication',
  }, {
    name: 'DepartmentService',
    folder: 'department-service',
    basePath: '/department',
  },
];

const options = services.find((x) => x.name === process.env.SERVICE);

const app = startApp(options);

global.chai = chai;
global.expect = chai.expect;
global.sinon = sinon;
global.app = app;
