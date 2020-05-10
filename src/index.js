require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect(
  'mongodb+srv://lmoraiscam:upload-image@cluster0-pmecj.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(routes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(
  'files',
  express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
);

app.listen(3333, () => {
  console.log('Server is running');
});
