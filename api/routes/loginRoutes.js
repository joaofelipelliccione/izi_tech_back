const express = require('express');
const rescue = require('express-rescue');
const LoginController = require('../controllers/LoginController');

const loginRoutes = express.Router();
const {
  mailValidatorForPost,
  passwordValidatorForPost,
} = require('../middlewares/validators');

loginRoutes.post('/',
mailValidatorForPost,
passwordValidatorForPost,
rescue(LoginController.login));

module.exports = loginRoutes;