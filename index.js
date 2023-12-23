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

// promise then/catch
pool
  .query('SELECT CURRENT_DATE')
  .then(res => console.log('1res :>> ', res.rows[0]))
  .catch(err => console.log('err :>> ', err));

// cb
pool.query('SELECT CURRENT_DATE', (err, res) => {
  if (!err) {
    console.log('2res.rows[0] :>> ', res.rows[0]);
  }
});

// promise async/await
(async function () {
  try {
    const res = await pool.query('SELECT CURRENT_DATE');
    console.log('3res.rows[0] :>> ', res.rows[0]);
  } catch (err) {
    console.log('err :>> ', err);
  }
})();

// Отримати список кастомерів
// pool
//   .query(
//     `
//     SELECT *
//     FROM customers
//     `
//   )
//   .then(res => console.log('res', res.rows))
//   .catch(err => console.log('err', err));
