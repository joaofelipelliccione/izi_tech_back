require('dotenv').config();
const multer = require('multer');
const multerGoogleStorage = require('multer-google-storage');

module.exports = multer({
  storage: multerGoogleStorage.storageEngine({
    autoRetry: true,
    maxRetries: 1,
    bucket: process.env.GCS_BUCKET,
    projectId: process.env.GCLOUD_PROJECT,
    keyFilename: process.env.GCS_KEYFILE,
    filename: (req, file, cb) => {
      const { id } = req.params;
      cb(null, `${id}.${file.mimetype.split('/')[1]}`);
    },
  }),
});