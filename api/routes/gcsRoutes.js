const express = require('express');
const rescue = require('express-rescue');
const ProfilePicturesBucketController = require(
  '../controllers/GCS/ProfilePicturesBucketController',
);

const gcsRoutes = express.Router();

const verifyTokenMw = require('../auth/verifyTokenMw');
const checkTokenMatchMw = require('../auth/checkTokenMatchMw');
const {
  userIdValidatorForPost,
  fileNameValidatorForDelete,
} = require('../middlewares/validators');

gcsRoutes.delete('/profile_picture_bucket/remove',
verifyTokenMw,
userIdValidatorForPost,
checkTokenMatchMw,
fileNameValidatorForDelete,
rescue(ProfilePicturesBucketController.remove));

module.exports = gcsRoutes;
