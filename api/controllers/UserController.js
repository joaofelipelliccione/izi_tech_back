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

module.exports = {
  create,
};
