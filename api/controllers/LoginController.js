const { StatusCodes } = require('http-status-codes');
const LoginService = require('../services/LoginService');

const login = async (req, res, next) => {
  const { userMail, userPassword } = req.body;
  const authObj = await LoginService.login(userMail, userPassword);

  if (authObj.error) {
    return next(authObj.error);
  }

  return res.status(StatusCodes.OK).json(authObj);
};

module.exports = {
  login,
};