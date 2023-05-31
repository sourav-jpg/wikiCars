const express = require('express');
const route = express.Router();
const controller = require('../controller/authController')

route.post('/login',controller.loginUser);
route.post('/register',controller.registerUser);

module.exports = route
