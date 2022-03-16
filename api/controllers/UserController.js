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

const update = async (req, res, _next) => {
  const { id } = req.params;
  const { userName, userPassword, userBirthday, userCPF, userCellphone } = req.body;

  await UserService.update(id, { userName, userPassword, userBirthday, userCPF, userCellphone });
  res.status(StatusCodes.OK)
  .json({ code: StatusCodes.OK, message: 'Alterações realizadas com sucesso!' });
};

module.exports = {
  create,
  findByPk,
  update,
};
