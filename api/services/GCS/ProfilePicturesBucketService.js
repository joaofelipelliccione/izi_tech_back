const Storage = require('@google-cloud/storage');
require('dotenv').config();

const bucketName = process.env.GCS_BUCKET;

const storage = new Storage({
  projectId: process.env.GCLOUD_PROJECT,
  keyFilename: process.env.GCS_KEYFILE,
});

const remove = async (fileName) => {
  await storage.bucket(bucketName).file(fileName).delete();
  // Caso o arquivo não exista no bucket, um erro será lançado e capturado pelo rescue.
};

module.exports = {
  remove,
};