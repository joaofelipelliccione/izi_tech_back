const { StatusCodes } = require('http-status-codes');
const { User, UserAddress } = require('../../models/index');

const findOne = async (userMail) => {
  const user = await User.findOne({
    where: { userMail },
    attributes: { exclude: ['userAddressId'] },
    include: [
      { model: UserAddress, as: 'userAddress' },
    ],
  });

  if (user === null) {
    return {
      error: {
        code: StatusCodes.NOT_FOUND,
        message: 'Usuário não encontrado.',
      },
    };
  }

  return user;
};

const create = async ({ userName, userMail, userPassword }) => {
  await User.create({ userName, userMail, userPassword });
};

module.exports = {
  findOne,
  create,
};