const express = require('express');
const rescue = require('express-rescue');
const UserController = require('../controllers/UserController');
const InfoFromCepController = require('../controllers/InfoFromCepController');
const UserAddressController = require('../controllers/UserAddressController');

const userRoutes = express.Router();

const verifyTokenMw = require('../auth/verifyTokenMw');
const checkTokenMatchMw = require('../auth/checkTokenMatchMw');
const {
  mailFormatValidator,
  passwordFormatValidator,
  userNameGapValidator,
  cpfFormatValidator,
  cellphoneFormatValidator,
  userAddressIdGapValidator,
  cepFormatValidator,
} = require('../middlewares/validators');

userRoutes.post('/new',
userNameGapValidator,
mailFormatValidator,
passwordFormatValidator,
rescue(UserController.create));

userRoutes.put('/update/:id',
verifyTokenMw,
checkTokenMatchMw,
userNameGapValidator,
passwordFormatValidator,
cpfFormatValidator,
cellphoneFormatValidator,
userAddressIdGapValidator,
cepFormatValidator,
rescue(InfoFromCepController.create),
rescue(UserAddressController.update),
rescue(UserController.update));

userRoutes.get('/:id',
verifyTokenMw,
checkTokenMatchMw,
rescue(UserController.findByPk));

module.exports = userRoutes;