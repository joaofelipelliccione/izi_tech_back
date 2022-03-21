const {
  PublishedProducts,
  // User,
  // ProductType,
  // ProductLine,
  // ProductTopCategory,
  // ProductCondition,
  // InfoFromCep
} = require('../../models/index');

const findAll = async () => {
  const publishedProducts = await PublishedProducts.findAll({
  });
  return publishedProducts;
};

module.exports = {
  findAll,
};