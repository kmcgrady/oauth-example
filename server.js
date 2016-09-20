'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const auth = require('./routes/auth');

const app = express();

app.disable('x-powered-by');
app.use(express.static('public'));
app.use('/auth', auth);

app.listen(8000);
