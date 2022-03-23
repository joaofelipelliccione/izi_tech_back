const { StatusCodes } = require('http-status-codes');
const UserService = require('../services/UserService');

module.exports = async (req, res, next) => {
  const { userInfo } = req;
  const { id } = req.params; // Id do usuário captada da URL, quando passada.
  const { userId } = req.body; // Id do usuário captada do Body, quando passada.

  const userIdToUse = id !== undefined ? id : userId; // Id do usuário utilizado abaixo.

  const user = await UserService.findByPk(userIdToUse);

  if (user.error) {
    return res.status(user.error.code).json({ code: user.error.code, message: user.error.message });
  }
  if (!user.error && userInfo.userId !== Number(userIdToUse)) { // Token do user X, não pode acessar informações do user Y.
    return res.status(StatusCodes.UNAUTHORIZED)
    .json({ code: StatusCodes.UNAUTHORIZED, message: 'Acesso negado.' });
  }

  next();
};