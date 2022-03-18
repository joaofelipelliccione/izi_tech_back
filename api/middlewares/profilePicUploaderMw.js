/* eslint-disable camelcase */
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const multerGoogleStorage = require('multer-google-storage');

module.exports = multer({
  storage: multerGoogleStorage.storageEngine({
    autoRetry: true,
    maxRetries: 1,
    bucket: process.env.GCS_BUCKET,
    projectId: process.env.GCLOUD_PROJECT,
    keyFilename: process.env.GCS_KEYFILE,
    credentials: {
      client_email: process.env.GCLOUD_CLIENT_EMAIL,
      private_key: process.env.GCLOUD_PRIVATE_KEY,
    },
    filename: (req, file, cb) => {
      const { id } = req.params;
      const imgName = `${id}_${uuidv4()}.${file.mimetype.split('/')[1]}`;

      cb(null, imgName);
      req.imgSrc = `https://storage.googleapis.com/gcsb-izi-tech-profile-pictures/${imgName}`;
    },
  }),
});