const { StatusCodes } = require('http-status-codes');
const ProfilePicturesBucketService = require('../../services/GCS/ProfilePicturesBucketService');

const remove = async (req, res, _next) => {
  const { file_name } = req.params;
  await ProfilePicturesBucketService.remove(file_name);

  return res.status(StatusCodes.OK).json({
    code: StatusCodes.OK,
    message: 'Arquivo deletado do bucket!',
  });
};

module.exports = {
  remove,
};