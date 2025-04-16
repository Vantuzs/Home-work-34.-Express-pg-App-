const { Router } = require('express');
const {phoneControllers} = require('../controllers')
const { validation, pagination } = require('../middleware');
// /api/phones
const phonesRouter = Router();

phonesRouter.post('/', validation.valedatePhoneOnCreate,phoneControllers.createPhone);
phonesRouter.get('/',pagination.paginateCustomer, phoneControllers.getAllPhones);
phonesRouter.get('/:id', phoneControllers.getByIdPhones);
phonesRouter.patch('/:id', validation.valedatePhoneOnCreate,phoneControllers.updateByIdPhone);
phonesRouter.delete('/:id', phoneControllers.deleteByIdPhone);
phonesRouter.get('/:idUser/:brand',phoneControllers.getDataUserBuyPhoneModel);
phonesRouter.get('/:idUser/:dateFrom/:dateTo',phoneControllers.getDataUserBuyPhoneModelDateFromDateTo);

module.exports = phonesRouter;




// const { Router } = require('express');
// const { customerControllers } = require('./../controllers');
// const { validation, pagination } = require('../middleware');

// // /api/customers
// const customersRouter = Router();

// customersRouter
//   .route('/')
//   .post(validation.validateCustomerOnCreate, customerControllers.createCustomer)
//   .get(pagination.paginateCustomer, customerControllers.getAllCustomers);

// customersRouter
//   .route('/:id')
//   .get(customerControllers.getByIdCustomer)
//   .patch(customerControllers.updateByIdCustomer)
//   .put(customerControllers.updateByIdCustomer)
//   .delete(customerControllers.deleteByIdCustomer);

// module.exports = customersRouter;