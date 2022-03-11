const { StatusCodes } = require('http-status-codes');
const UserService = require('./UserService');
const generateToken = require('../auth/generateToken');

const login = async (userMail, userPassword) => {
  const user = await UserService.findOne(userMail);
  const isPasswordValid = user.userPassword === userPassword;
  const authToken = await generateToken(userMail, userPassword, user.userId);

  if (user.error) {
    return {
      error: user.error,
    };
  }

  if (!isPasswordValid) {
    return {
      error: {
        code: StatusCodes.FORBIDDEN,
        message: 'Senha incorreta.',
      },
    };
  }

  return { authToken, userId: user.userId, userPicture: user.userPicture };
};

module.exports = {
  login,
};