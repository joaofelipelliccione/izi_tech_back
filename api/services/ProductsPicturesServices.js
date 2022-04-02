const { StatusCodes } = require('http-status-codes');
const {
  ProductPictures,
} = require('../../models/index');

const create = async (productId, productsPicsPathArr) => {
  await Promise.all(productsPicsPathArr.map(async (path) => {
    await ProductPictures.create({
      productPicturePath: path,
      productId,
    });
  }));

  return {
    code: StatusCodes.CREATED,
    productsPicsPathArr,
  };
};

module.exports = {
  create,
};