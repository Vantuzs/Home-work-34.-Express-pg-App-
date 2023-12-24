const { Pool } = require('pg');
const Customer = require('./customer');
const Phone = require('./phone');

const connectionOptions = {
  user: 'postgres',
  host: 'localhost',
  database: 'phones_sales',
  password: 'admin',
  port: 5432,
};

const pool = new Pool(connectionOptions);

process.on('beforeExit', () => pool.end());

Customer.pool = pool;

module.exports = { Customer, Phone };
