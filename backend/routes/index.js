const express = require('express');
const app = express();
require('dotenv').config()

//import all route inside routes folder
const authApi = require('./auth');

// all route in here
const api = '/api/v1';
app.use(api, authApi);

module.exports = app