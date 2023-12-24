const { Router } = require('express');

const router = Router();

router.post('/customers', (req, res) => {});
router.get('/customers', (req, res) => {});
router.get('/customers/:id', (req, res) => {});
router.patch('/customers/:id', (req, res) => {});
router.delete('/customers/:id', (req, res) => {});

router.post('/phones', (req, res) => {});
router.get('/phones', (req, res) => {});
router.get('/phones/:id', (req, res) => {});
router.patch('/phones/:id', (req, res) => {});
router.delete('/phones/:id', (req, res) => {});

module.exports = router;
