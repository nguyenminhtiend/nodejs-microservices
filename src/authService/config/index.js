const path = require('path');

const { NODE_ENV } = process.env;
if (['development', 'test'].includes(NODE_ENV)) {
  const envPath = {
    test: '.env.test',
    development: '.env.userService',
  };
  require('dotenv').config({ path: path.resolve(process.cwd(), envPath[NODE_ENV]) }); //eslint-disable-line
}

const db = {
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  dialect: 'mysql',
};

if (!process.env.DB_LOGGING) {
  db.logging = false;
}

module.exports = {
  [NODE_ENV]: db,
};
