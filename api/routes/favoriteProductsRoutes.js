const express = require('express');
const rescue = require('express-rescue');
const FavoriteProductsController = require('../controllers/FavoriteProductsController');

const favoriteProductsRoutes = express.Router();

const verifyTokenMw = require('../auth/verifyTokenMw');
const checkTokenMatchMw = require('../auth/checkTokenMatchMw');

favoriteProductsRoutes.delete('/remove',
verifyTokenMw,
checkTokenMatchMw,
rescue(FavoriteProductsController.remove));

module.exports = favoriteProductsRoutes;