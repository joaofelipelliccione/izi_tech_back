const { StatusCodes } = require('http-status-codes');
const ProfilePicturesBucketService = require('../../services/GCS/ProfilePicturesBucketService');

const remove = async (req, res, _next) => {
  const { fileName } = req.body;
  await ProfilePicturesBucketService.remove(fileName);

  return res.status(StatusCodes.OK).json({
    code: StatusCodes.OK,
    message: 'Arquivo deletado do bucket!',
  });
};

module.exports = {
  remove,
};