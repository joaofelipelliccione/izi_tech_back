const { StatusCodes } = require('http-status-codes');
const UserService = require('../services/UserService');
const UserAddressService = require('../services/UserAddressService');

const create = async (req, res, _next) => {
  const { userName, userMail, userPassword } = req.body;

  const existentUser = await UserService.findOne(userMail);
  if (!existentUser.error) {
    return res.status(StatusCodes.CONFLICT)
    .json({ code: StatusCodes.CONFLICT, message: 'Usuário já cadastrado.' });
  }

  const { userAddressId } = await UserAddressService.create();
  const newUser = await UserService
  .create({ userName, userMail, userPassword, userAddressId });
  return res.status(newUser.code).json({ code: newUser.code, message: newUser.message });
};

const findByPk = async (req, res, _next) => {
  const { userInfo } = req;
  const { id } = req.params;

  const user = await UserService.findByPk(id);

  if (user.error) {
    res.status(user.error.code).json({ code: user.error.code, message: user.error.message });
  }
  if (!user.error && userInfo.userId !== Number(id)) { // Token do user X, não pode acessar informações do user Y.
    res.status(StatusCodes.UNAUTHORIZED)
    .json({ code: StatusCodes.UNAUTHORIZED, message: 'Acesso negado.' });
  }

  res.status(StatusCodes.OK).json(user);
};

const update = async (_req, res, _next) => { // Continuar fazendo
  res.status(StatusCodes.OK)
  .json({ code: StatusCodes.UNAUTHORIZED, message: 'Alterações bem sucedidas!' });
};

module.exports = {
  create,
  findByPk,
  update,
};
