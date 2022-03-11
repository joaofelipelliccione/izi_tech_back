const express = require('express');
const rescue = require('express-rescue');
const UserController = require('../controllers/UserController');

const userRoutes = express.Router();

// const verifyTokenMw = require('../auth/verifyTokenMw');
const {
  mailFormatValidator,
  passwordFormatValidator,
  userNameGapValidator,
} = require('../middlewares/validators');

userRoutes.post('/new',
userNameGapValidator,
mailFormatValidator,
passwordFormatValidator,
rescue(UserController.create));

module.exports = userRoutes;