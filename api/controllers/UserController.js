const { StatusCodes } = require('http-status-codes');
const UserService = require('../services/UserService');

const create = async (req, res, _next) => {
  const { userName, userMail, userPassword } = req.body;

  const existentUser = await UserService.findOne(userMail);
  if (!existentUser.error) {
    return res.status(StatusCodes.CONFLICT)
    .json({ code: StatusCodes.CONFLICT, message: 'Usuário já cadastrado.' });
  }

  const newUser = await UserService.create({ userName, userMail, userPassword });
  return res.status(newUser.code).json({ code: newUser.code, message: newUser.message });
};

const findByPk = async (req, res, _next) => {
  // const { userInfo } = req; // FAZER VALIDAÇÃO
  const { id } = req.params;
  const user = await UserService.findByPk(id);

  if (user.error) {
    res.status(user.error.code).json({ code: user.error.code, message: user.error.message });
  }

  res.status(StatusCodes.OK).json(user);
};

module.exports = {
  create,
  findByPk,
};
