const express = require('express');
const { asyncRoute } = require('../../../core/utils');
const { validator } = require('../../../core/middlewares');
const UserController = require('./user-controller');
const userSchema = require('./user-schema');

module.exports = (app) => {
  const router = express.Router();

  router.post('/register', validator(userSchema.register), asyncRoute(UserController.register));
  router.get('/me', asyncRoute(UserController.getUserInfo));

  app.use('/users', router);
};
