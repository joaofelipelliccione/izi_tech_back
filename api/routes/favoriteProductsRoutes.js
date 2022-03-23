const express = require('express');
const rescue = require('express-rescue');
const FavoriteProductsController = require('../controllers/FavoriteProductsController');

const favoriteProductsRoutes = express.Router();

const verifyTokenMw = require('../auth/verifyTokenMw');
const checkTokenMatchMw = require('../auth/checkTokenMatchMw');
const {
  productIdGapValidator,
} = require('../middlewares/validators');

favoriteProductsRoutes.post('/insert',
verifyTokenMw,
checkTokenMatchMw,
productIdGapValidator,
rescue(FavoriteProductsController.create));

favoriteProductsRoutes.delete('/remove',
verifyTokenMw,
checkTokenMatchMw,
productIdGapValidator,
rescue(FavoriteProductsController.remove));

module.exports = favoriteProductsRoutes;