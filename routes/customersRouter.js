const { Router } = require('express');
const { customerControllers } = require('./../controllers');
const { validation } = require('../middleware');

// /api/customers
const customersRouter = Router();

customersRouter
  .route('/')
  .post(validation.validateCustomerOnCreate, customerControllers.createCustomer)
  .get(customerControllers.getAllCustomers);

customersRouter
  .route('/:id')
  .get(customerControllers.getByIdCustomer)
  .patch(customerControllers.updateByIdCustomer)
  .delete(customerControllers.deleteByIdCustomer);

module.exports = customersRouter;
