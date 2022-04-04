const express = require('express');
const rescue = require('express-rescue');
const ProfilePicturesBucketController = require(
  '../controllers/GCS/ProfilePicturesBucketController',
);

const gcsRoutes = express.Router();

const verifyTokenMw = require('../auth/verifyTokenMw');

gcsRoutes.get('/profile_picture_bucket/remove/:file_name',
verifyTokenMw,
rescue(ProfilePicturesBucketController.remove));

module.exports = gcsRoutes;
