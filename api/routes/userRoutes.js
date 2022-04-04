const express = require('express');
const rescue = require('express-rescue');
const UserController = require('../controllers/UserController');
const InfoFromCepController = require('../controllers/InfoFromCepController');
const UserAddressController = require('../controllers/UserAddressController');
const ProfilePicturesBucket = require('../controllers/GCS/ProfilePicturesBucketController');

const userRoutes = express.Router();

const verifyTokenMw = require('../auth/verifyTokenMw');
const checkTokenMatchMw = require('../auth/checkTokenMatchMw');
const profilePicUploaderMw = require('../middlewares/profilePicUploaderMw');
const {
  userNameValidatorForPost,
  mailValidatorForPost,
  passwordValidatorForPost,
  userNameValidatorForPut,
  passwordValidatorForPut,
  cpfValidatorForPut,
  cellphoneValidatorForPut,
  userPictureValidatorForPut,
  userAddressIdValidatorForPut,
  cepValidatorForPutOrPost,
} = require('../middlewares/validators');

userRoutes.post('/new',
userNameValidatorForPost,
mailValidatorForPost,
passwordValidatorForPost,
rescue(UserController.create));

userRoutes.put('/update/profile_picture/:id',
verifyTokenMw,
checkTokenMatchMw,
rescue(profilePicUploaderMw.single('profilePicUploaderInput')),
rescue(UserController.updateProfilePicture));

userRoutes.put('/update/:id',
verifyTokenMw,
checkTokenMatchMw,
userNameValidatorForPut,
passwordValidatorForPut,
cpfValidatorForPut,
cellphoneValidatorForPut,
userPictureValidatorForPut,
userAddressIdValidatorForPut,
cepValidatorForPutOrPost,
rescue(InfoFromCepController.create),
rescue(UserAddressController.update),
rescue(UserController.update));

userRoutes.get('gcs/remove/profile_picture/:file_name',
verifyTokenMw,
rescue(ProfilePicturesBucket.remove));

userRoutes.get('/:id',
verifyTokenMw,
checkTokenMatchMw,
rescue(UserController.findByPk));

module.exports = userRoutes;
