const { Router } = require('express');

// /api/customers
const customersRouter = Router();

customersRouter.post('/', (req, res) => {});
customersRouter.get('/', (req, res) => {});
customersRouter.get('/:id', (req, res) => {});
customersRouter.patch('/:id', (req, res) => {});
customersRouter.delete('/:id', (req, res) => {});

module.exports = customersRouter;
