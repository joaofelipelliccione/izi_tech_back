const { StatusCodes } = require('http-status-codes');
const UserService = require('../services/UserService');

const findUserInfo = async (req, res, next) => {
  const { userMail } = req.body;
  const user = await UserService.findUserInfo(userMail);

  if (user.error) {
    return next(user.error);
  }

  return res.status(StatusCodes.OK).json(user);
};

module.exports = {
  findUserInfo,
};
