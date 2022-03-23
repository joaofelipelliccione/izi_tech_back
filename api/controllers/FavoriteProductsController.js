const { StatusCodes } = require('http-status-codes');
const FavoriteProductsService = require('../services/FavoriteProductsService');

const remove = async (req, res, _next) => {
  const { userId, productId } = req.body;

  await FavoriteProductsService.remove({ userId, productId });
  return res.status(StatusCodes.NO_CONTENT).json({
    code: StatusCodes.OK,
    message: `Produto de id ${productId}, desfavoritado com sucesso!`,
  });
};

module.exports = {
  remove,
};