const express = require('express');
const rescue = require('express-rescue');
const PublishedProductsController = require('../controllers/PublishedProductsController');
const InfoFromCepController = require('../controllers/InfoFromCepController');

const publishedProductsRoutes = express.Router();

const verifyTokenMw = require('../auth/verifyTokenMw');
const checkTokenMatchMw = require('../auth/checkTokenMatchMw');

publishedProductsRoutes.get('/',
rescue(PublishedProductsController.findAll));

publishedProductsRoutes.post('/new',
verifyTokenMw,
checkTokenMatchMw,
rescue(InfoFromCepController.create),
rescue(PublishedProductsController.create));

module.exports = publishedProductsRoutes;