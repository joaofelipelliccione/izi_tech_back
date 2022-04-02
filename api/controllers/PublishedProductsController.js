const { StatusCodes } = require('http-status-codes');
const PublishedProductsService = require('../services/PublishedProductsService');

const findAll = async (_req, res, _next) => {
  const productsCategories = await PublishedProductsService.findAll();
  res.status(StatusCodes.OK).json(productsCategories);
};

const create = async (req, res, _next) => {
  const { infoFromCepId } = req;
  const { userId, productTitle, productDescription,
    productAcceptChange, productPrice, productTypeId,
    productConditionId } = req.body;

  const { code, newProductId } = await PublishedProductsService.create(infoFromCepId, {
    userId,
    productTitle,
    productDescription,
    productAcceptChange,
    productPrice,
    productTypeId,
    productConditionId,
  });

  res.status(code)
  .json({ code, newProductId });
};

module.exports = {
  findAll,
  create,
};