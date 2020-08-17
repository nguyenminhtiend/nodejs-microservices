const express = require('express');
const { asyncRoute, validator } = require('../../../core/utils');
const { authentication } = require('../../../core/middlewares');
const employeeController = require('./employeeController');
const employeeSchema = require('./employeeSchema');

module.exports = (app) => {
  const router = express.Router();

  router.get('/', authentication, asyncRoute(employeeController.index));
  router.get('/:id', asyncRoute(employeeController.show));
  router.post('/', authentication, validator(employeeSchema.create), asyncRoute(employeeController.create));
  router.put('/:id', asyncRoute(employeeController.update));

  app.use('/employees', router);
};
