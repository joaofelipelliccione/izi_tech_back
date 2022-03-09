const { StatusCodes } = require('http-status-codes');
const { User, UserAddress } = require('../../models/index');

const findUserInfo = async (userMail) => {
  const user = await User.findOne({
    where: { userMail },
    include: {
      model: UserAddress,
      as: 'userAddress',
    },
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

module.exports = {
  findUserInfo,
};