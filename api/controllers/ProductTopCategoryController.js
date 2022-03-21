const { StatusCodes } = require('http-status-codes');
const ProductTopCategoryService = require('../services/ProductTopCategoryService');

const findAll = async (_req, res, _next) => {
  const productsCategories = await ProductTopCategoryService.findAll();
  res.status(StatusCodes.OK).json(productsCategories);
};

module.exports = {
  findAll,
};
