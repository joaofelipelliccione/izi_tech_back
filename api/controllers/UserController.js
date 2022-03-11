const { StatusCodes } = require('http-status-codes');
const UserService = require('../services/UserService');

const create = async (req, res, _next) => {
  const { userName, userMail, userPassword } = req.body;

  const existentUser = await UserService.findOne(userMail);
  if (!existentUser.error) {
    return res.status(StatusCodes.CONFLICT)
    .json({ message: 'Usuário já cadastrado.' });
  }

  await UserService.create({ userName, userMail, userPassword });
  return res.status(StatusCodes.CREATED).json();
};

module.exports = {
  create,
};
