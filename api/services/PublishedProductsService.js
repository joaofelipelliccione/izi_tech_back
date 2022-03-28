/* eslint-disable max-lines-per-function */
const { StatusCodes } = require('http-status-codes');

const {
  PublishedProducts,
  ProductCondition,
  ProductType,
  ProductLine,
  ProductTopCategory,
  ProductPictures,
  InfoFromCep,
  User,
} = require('../../models/index');

const findAll = async () => {
  const publishedProducts = await PublishedProducts.findAll({
    attributes: { exclude: ['productConditionId', 'productTypeId', 'infoFromCepId', 'userId'] },
    include: [
      {
        model: ProductCondition,
        as: 'productCondition',
      },
      {
        model: ProductType,
        as: 'productType',
        include: [{
          model: ProductLine,
          as: 'productLine',
          include: [{ model: ProductTopCategory, as: 'topCategory' }],
          attributes: { exclude: ['topCategoryId'] },
        }],
        attributes: { exclude: ['productLineId'] },
      },
      {
        model: ProductPictures,
        as: 'productPictures',
        attributes: { exclude: ['productPictureId', 'productId'] },
      },
      {
        model: InfoFromCep,
        as: 'infoFromCep',
      },
      {
        model: User,
        as: 'userInfo',
        attributes: {
          exclude: ['userPassword', 'userBirthday', 'userCPF', 'userPicture', 'userAddressId'],
        },
      },
    ],
  });

  return publishedProducts;
};

const create = async (infoFromCepId, {
  userId, productTitle, productDescription, productAcceptChange,
  productPrice, productTypeId, productConditionId }) => {
  await PublishedProducts.create({
    userId,
    productTitle,
    productDescription,
    productAcceptChange,
    productPrice,
    productTypeId,
    productConditionId,
    infoFromCepId,
  });

  return {
    code: StatusCodes.CREATED,
    message: 'Novo produto publicado com sucesso!',
  };
};

module.exports = {
  findAll,
  create,
};