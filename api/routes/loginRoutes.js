const express = require('express');
const rescue = require('express-rescue');
const LoginController = require('../controllers/LoginController');

const loginRoutes = express.Router();
const {
  mailFormatValidator,
  passwordFormatValidator,
} = require('../middlewares/validators');

loginRoutes.post('/',
mailFormatValidator,
passwordFormatValidator,
rescue(LoginController.login));

module.exports = loginRoutes;