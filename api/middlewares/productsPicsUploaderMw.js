require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const multerGoogleStorage = require('multer-google-storage');

module.exports = multer({
  storage: multerGoogleStorage.storageEngine({
    autoRetry: true,
    maxRetries: 1,
    bucket: process.env.GCS_BUCKET_2,
    projectId: process.env.GCLOUD_PROJECT,
    keyFilename: process.env.GCS_KEYFILE_2,
    filename: (req, file, cb) => {
      const imgsSrcArr = req.imgsSrcArr ? req.imgsSrcArr : [];
      const { productId } = req.params;

      const imgName = `${productId}_${uuidv4()}.${file.mimetype.split('/')[1]}`;
      const eachImgSrc = `https://storage.googleapis.com/gcsb-izi-tech-product-pictures/${imgName}`;
      imgsSrcArr.push(eachImgSrc);

      req.imgsSrcArr = imgsSrcArr;
      cb(null, imgName);
    },
  }),
});