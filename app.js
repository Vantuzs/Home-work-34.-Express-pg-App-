const express = require('express');
const router = require('./routes');

const app = express();

app.use('/api', router);

module.exports = app;

// POST   /customers {body}
// GET    /customers?page=1&results=10
// GET    /customers/1
// PATCH  /customers/1 {body}
// DELETE /customers/1

// отримати інфо про замовлення конкретного користувача
// GET /customers/1/orders
// отримати інфо про конкретне замовлення конкретного користувача
// GET /customers/1/orders/5
