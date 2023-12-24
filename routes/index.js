const { Router } = require('express');
const customersRouter = require('./customersRouter');

// /api
const router = Router();

router.use('/customers', customersRouter);

router.post('/phones', (req, res) => {});
router.get('/phones', (req, res) => {});
router.get('/phones/:id', (req, res) => {});
router.patch('/phones/:id', (req, res) => {});
router.delete('/phones/:id', (req, res) => {});

module.exports = router;
