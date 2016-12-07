'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const passport = require('passport');

const app = express();

app.disable('x-powered-by');

app.use(passport.initialize());
app.use(express.static('public'));

const auth = require('./routes/auth');

app.use('/auth', auth);

app.listen(8000);
