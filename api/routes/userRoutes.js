const express = require('express');
const rescue = require('express-rescue');
const UserController = require('../controllers/UserController');

const userRoutes = express.Router();

userRoutes.post('/', rescue(UserController.findUserInfo));

module.exports = userRoutes;