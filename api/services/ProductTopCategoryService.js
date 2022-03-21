const {
  ProductTopCategory,
  ProductLine,
  ProductType,
} = require('../../models/index');

const findAll = async () => {
  const productsCategories = await ProductTopCategory.findAll({
    include: [
      {
        model: ProductLine,
        as: 'productLine',
        attributes: { exclude: ['topCategoryId'] },
        include: [{
          model: ProductType,
          as: 'productType',
          attributes: { exclude: ['productLineId'] } }],
      },
    ],
  });
  return productsCategories;
};

module.exports = {
  findAll,
};