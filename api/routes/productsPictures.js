const express = require('express');
const rescue = require('express-rescue');
const ProductsPicturesController = require('../controllers/ProductsPicturesController');

const productsPicturesRoutes = express.Router();

const verifyTokenMw = require('../auth/verifyTokenMw');
const productsPicsUploaderMw = require('../middlewares/productsPicsUploaderMw');

productsPicturesRoutes.post('/new/:productId',
verifyTokenMw,
rescue(productsPicsUploaderMw.array('productPicsUploaderInput')),
rescue(ProductsPicturesController.testeJF));

module.exports = productsPicturesRoutes;