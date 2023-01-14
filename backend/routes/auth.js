const express = require('express');
const routes = express();
const {registerController,loginController} = require('../controller/auth')

routes.post('/register-user', registerController);

routes.post('/login-user', loginController);

module.exports = routes;