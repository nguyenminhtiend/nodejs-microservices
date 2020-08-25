const express = require('express');
const { asyncRoute } = require('../../../core/utils');
const { authentication, validator } = require('../../../core/middlewares');
const AuthController = require('./auth-controller');
const authSchema = require('./auth-schema');

module.exports = (app) => {
  const router = express.Router();

  router.post('/login', validator(authSchema.login), asyncRoute(AuthController.login));
  router.post('/refresh-token', asyncRoute(AuthController.refreshToken));
  router.delete('/logout', authentication, asyncRoute(AuthController.logout));

  app.use('/auth', router);
};
