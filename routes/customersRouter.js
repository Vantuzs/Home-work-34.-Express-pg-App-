const { Router } = require('express');
const { customerControllers } = require('./../controllers');

// /api/customers
const customersRouter = Router();

customersRouter
  .route('/')
  .post(customerControllers.createCustomer)
  .get(customerControllers.getAllCustomers);

customersRouter
  .route('/:id')
  .get(customerControllers.getByIdCustomer)
  .patch(customerControllers.updateByIdCustomer)
  .delete(customerControllers.deleteByIdCustomer);

module.exports = customersRouter;
