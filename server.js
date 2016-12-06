'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const passport = require('passport');
const auth = require('./routes/auth');

const app = express();

app.disable('x-powered-by');

app.use(passport.initialize());

app.use(express.static('public'));

app.use('/auth', auth);

app.listen(8000);
