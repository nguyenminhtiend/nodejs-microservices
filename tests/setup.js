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

const app = startApp(process.argv[5].replace('--', ''));

global.chai = chai;
global.expect = chai.expect;
global.sinon = sinon;
global.app = app;
