const {
  FavoriteProducts,
} = require('../../models/index');

const remove = async ({ userId, productId }) => {
  await FavoriteProducts.destroy({ where: {
    userId,
    productId,
  } });
};

module.exports = {
  remove,
};