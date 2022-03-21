const express = require('express');
const rescue = require('express-rescue');
const ProductTopCategoryController = require('../controllers/ProductTopCategoryController');

const productCategoriesRoutes = express.Router();

productCategoriesRoutes.get('/',
rescue(ProductTopCategoryController.findAll));

module.exports = productCategoriesRoutes;