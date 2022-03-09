const express = require('express');
const rescue = require('express-rescue');
const PingController = require('../controllers/PingController');

const pingRoutes = express.Router();

pingRoutes.get('/', rescue(PingController));

module.exports = pingRoutes;
