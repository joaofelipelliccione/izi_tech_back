/* eslint-disable max-lines-per-function */
const { StatusCodes } = require('http-status-codes');
const {
  User,
  UserAddress, InfoFromCep,
  PublishedProducts,
} = require('../../models/index');

const findOne = async (userMail) => {
  const user = await User.findOne({
    where: { userMail } });

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

const create = async ({ userName, userMail, userPassword, userAddressId }) => {
  await User.create({ userName, userMail, userPassword, userAddressId });
  return {
    code: StatusCodes.CREATED,
    message: 'Novo usuário cadastrado com sucesso!',
  };
};

const findByPk = async (userId) => {
  const user = await User.findByPk(userId, {
    attributes: { exclude: ['userAddressId'] },
    include: [
      { model: UserAddress,
        as: 'userAddress',
        attributes: { exclude: ['infoFromCepId'] },
        include: [{ model: InfoFromCep, as: 'infoFromCep' }],
      },
      { model: PublishedProducts,
        as: 'publishedProducts',
        attributes: ['productId'],
      },
      { model: PublishedProducts,
        as: 'favoriteProducts',
        through: { attributes: [] },
        attributes: ['productId'],
      },
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

const update = async (userId, { userName, userPassword, userBirthday, userCPF, userCellphone }) => {
  await User.update(
    { userName, userPassword, userBirthday, userCPF, userCellphone },
    { where: { userId } }, 
  );
};

module.exports = {
  findOne,
  create,
  findByPk,
  update,
};