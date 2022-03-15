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
  const { id } = req.params;

  const user = await UserService.findByPk(id);
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
