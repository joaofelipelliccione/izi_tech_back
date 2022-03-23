const { StatusCodes } = require('http-status-codes');

const {
  FavoriteProducts,
} = require('../../models/index');

const findOne = async ({ userId, productId }) => {
  const favoriteProduct = await FavoriteProducts.findOne({
    where: { userId, productId } });

  if (favoriteProduct === null) {
    return {
      error: {
        code: StatusCodes.NOT_FOUND,
        message: `Usuário ${userId} ainda não favoritou o produto ${productId}`,
      },
    };
  }

  return favoriteProduct;
};

const create = async ({ userId, productId }) => {
  await FavoriteProducts.create({ userId, productId });
  return {
    code: StatusCodes.CREATED,
    message: `Produto de id ${productId} favoritado com sucesso!`,
  };
};

const remove = async ({ userId, productId }) => {
  await FavoriteProducts.destroy({ where: {
    userId,
    productId,
  } });
};

module.exports = {
  findOne,
  create,
  remove,
};