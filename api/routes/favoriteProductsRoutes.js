const express = require('express');
const rescue = require('express-rescue');
const FavoriteProductsController = require('../controllers/FavoriteProductsController');

const favoriteProductsRoutes = express.Router();

const verifyTokenMw = require('../auth/verifyTokenMw');
const checkTokenMatchMw = require('../auth/checkTokenMatchMw');
const {
  productIdValidator,
} = require('../middlewares/validators');

favoriteProductsRoutes.post('/insert',
verifyTokenMw,
checkTokenMatchMw,
productIdValidator,
rescue(FavoriteProductsController.create));

favoriteProductsRoutes.delete('/remove',
verifyTokenMw,
checkTokenMatchMw,
productIdValidator,
rescue(FavoriteProductsController.remove));

module.exports = favoriteProductsRoutes;