const { StatusCodes } = require('http-status-codes');
const UserService = require('../services/UserService');

module.exports = async (req, res, next) => {
  const { userInfo } = req;
  const { id } = req.params;

  const user = await UserService.findByPk(id);

  if (user.error) {
    return res.status(user.error.code).json({ code: user.error.code, message: user.error.message });
  }
  if (!user.error && userInfo.userId !== Number(id)) { // Token do user X, não pode acessar informações do user Y.
    return res.status(StatusCodes.UNAUTHORIZED)
    .json({ code: StatusCodes.UNAUTHORIZED, message: 'Acesso negado.' });
  }

  next();
};