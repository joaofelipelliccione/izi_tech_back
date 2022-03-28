const express = require('express');
const rescue = require('express-rescue');
const PublishedProductsController = require('../controllers/PublishedProductsController');
const InfoFromCepController = require('../controllers/InfoFromCepController');

const publishedProductsRoutes = express.Router();

const verifyTokenMw = require('../auth/verifyTokenMw');
const checkTokenMatchMw = require('../auth/checkTokenMatchMw');
const {
  userIdValidatorForPost,
  productTitleValidatorForPost,
  productDescriptionForPost,
  productAcceptChangeForPost,
  productPriceForPost,
  productTypeIdForPost,
  productConditionIdForPost,
  cepValidatorForPutOrPost,
  productStreetValidatorForPost,
  productNeighborhoodValidatorForPost,
  productCityValidatorForPost,
  productUfValidatorForPost,
  productDDDValidatorForPost,
} = require('../middlewares/validators');

publishedProductsRoutes.get('/',
rescue(PublishedProductsController.findAll));

publishedProductsRoutes.post('/new',
verifyTokenMw,
userIdValidatorForPost,
checkTokenMatchMw,
productTitleValidatorForPost,
productDescriptionForPost,
productAcceptChangeForPost,
productPriceForPost,
productTypeIdForPost,
productConditionIdForPost,
cepValidatorForPutOrPost,
productStreetValidatorForPost,
productNeighborhoodValidatorForPost,
productCityValidatorForPost,
productUfValidatorForPost,
productDDDValidatorForPost,
rescue(InfoFromCepController.create),
rescue(PublishedProductsController.create));

module.exports = publishedProductsRoutes;