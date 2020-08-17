const express = require('express');
const { asyncRoute } = require('../../../core/utils');
const signupController = require('./userController');

module.exports = (app) => {
  const router = express.Router();

  router.get('/me', asyncRoute(signupController.getUserInfo));

  app.use('/user', router);
};
