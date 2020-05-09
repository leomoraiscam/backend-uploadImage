const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();

app.use(routes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.listen(3333, () => {
  console.log('Server is running');
});
