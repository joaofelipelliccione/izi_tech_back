const express = require('express');
const rescue = require('express-rescue');
const UserController = require('../controllers/UserController');
const InfoFromCepController = require('../controllers/InfoFromCepController');
const UserAddressController = require('../controllers/UserAddressController');

const userRoutes = express.Router();

const verifyTokenMw = require('../auth/verifyTokenMw');
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

userRoutes.put('/update',
verifyTokenMw,
rescue(InfoFromCepController.create),
rescue(UserAddressController.update),
rescue(UserController.update));

userRoutes.get('/:id',
verifyTokenMw,
rescue(UserController.findByPk));

module.exports = userRoutes;