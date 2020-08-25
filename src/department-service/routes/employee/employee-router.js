const express = require('express');
const { asyncRoute } = require('../../../core/utils');
const { authentication, validator } = require('../../../core/middlewares');
const EmployeeController = require('./employee-controller');
const EmployeeSchema = require('./employee-schema');

module.exports = (app) => {
  const router = express.Router();

  router.get(
    '/',
    authentication,
    validator(EmployeeSchema.index),
    asyncRoute(EmployeeController.index),
  );

  router.get(
    '/:id',
    authentication,
    asyncRoute(EmployeeController.show),
  );

  router.post(
    '/',
    authentication,
    validator(EmployeeSchema.create),
    asyncRoute(EmployeeController.create),
  );

  router.put(
    '/:id',
    asyncRoute(EmployeeController.update),
  );

  app.use('/employees', router);
};
