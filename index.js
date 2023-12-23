const { Pool } = require('pg');

const connectionOptions = {
  user: 'postgres',
  host: 'localhost',
  database: 'phones_sales',
  password: 'admin',
  port: 5432,
};

const pool = new Pool(connectionOptions);

// Завершити з'єднання з БД при завершенні роботи застосунку
process.on('beforeExit', () => pool.end());

pool
  .query('SELECT CURRENT_DATE')
  .then(res => console.log('res :>> ', res.rows[0]))
  .catch(err => console.log('err :>> ', err));
