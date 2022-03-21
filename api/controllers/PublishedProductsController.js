const { StatusCodes } = require('http-status-codes');
const PublishedProductsService = require('../services/PublishedProductsService');

const findAll = async (_req, res, _next) => {
  const productsCategories = await PublishedProductsService.findAll();
  res.status(StatusCodes.OK).json(productsCategories);
};

module.exports = {
  findAll,
};