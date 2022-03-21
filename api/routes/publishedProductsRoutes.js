const express = require('express');
const rescue = require('express-rescue');
const PublishedProductsController = require('../controllers/PublishedProductsController');

const publishedProductsRoutes = express.Router();

publishedProductsRoutes.get('/',
rescue(PublishedProductsController.findAll));

module.exports = publishedProductsRoutes;