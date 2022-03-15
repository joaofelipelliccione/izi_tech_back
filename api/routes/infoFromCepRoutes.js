const express = require('express');
const rescue = require('express-rescue');
const InfoFromCepController = require('../controllers/InfoFromCepController');

const infoFromCepRoutes = express.Router();

const verifyTokenMw = require('../auth/verifyTokenMw');
const {
  cepFormatValidator,
} = require('../middlewares/validators');

infoFromCepRoutes.post('/new',
verifyTokenMw,
cepFormatValidator,
rescue(InfoFromCepController.create));

module.exports = infoFromCepRoutes;