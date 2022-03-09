const express = require('express');
const rescue = require('express-rescue');
const LoginController = require('../controllers/LoginController');

const loginRoutes = express.Router();

loginRoutes.post('/', rescue(LoginController.login));

module.exports = loginRoutes;