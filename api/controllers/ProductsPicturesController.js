const ProductsPicturesServices = require('../services/ProductsPicturesServices');

const create = async (req, res, _next) => {
  const { productId } = req.params;
  const { imgsSrcArr } = req;

  const result = await ProductsPicturesServices
    .create(productId, imgsSrcArr);
  return res.status(result.code).json(result);
};

module.exports = {
  create,
};
