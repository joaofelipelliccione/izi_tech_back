const { StatusCodes } = require('http-status-codes');
const FavoriteProductsService = require('../services/FavoriteProductsService');

const create = async (req, res, _next) => {
  const { userId, productId } = req.body;

  const alreadyFavProduct = await FavoriteProductsService.findOne({ userId, productId });
  if (!alreadyFavProduct.error) {
    return res.status(StatusCodes.CONFLICT)
    .json({
      code: StatusCodes.CONFLICT,
      message: `Usuário ${userId} já favoritou o produto ${productId}`,
    });
  }

  const newFavProduct = await FavoriteProductsService
  .create({ userId, productId });
  return res.status(newFavProduct.code)
  .json({ code: newFavProduct.code, message: newFavProduct.message });
};

const remove = async (req, res, _next) => {
  const { userId, productId } = req.body;

  await FavoriteProductsService.remove({ userId, productId });
  return res.status(StatusCodes.OK).json({
    code: StatusCodes.OK,
    message: `Produto de id ${productId}, desfavoritado com sucesso!`,
  });
};

module.exports = {
  create,
  remove,
};