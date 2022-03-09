const express = require('express');
const VerifyTokenController = require('../controllers/VerifyTokenController');

const verifyTokenRoutes = express.Router();

verifyTokenRoutes.post('/', VerifyTokenController.verifyToken);

module.exports = verifyTokenRoutes;