const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('hello');
  res.send('Hello to page');
});

module.exports = app;
