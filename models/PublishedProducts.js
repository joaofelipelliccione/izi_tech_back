/* eslint-disable max-lines-per-function */

module.exports = (sequelize, DataTypes) => {
  const PublishedProducts = sequelize.define('PublishedProducts', {
    productId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    publicationDate: DataTypes.DATEONLY,
    productTitle: DataTypes.STRING(100),
    productDescription: DataTypes.STRING(1000),
    productAcceptChange: DataTypes.BOOLEAN, // 0 = false ; 1 = true
    productPrice: DataTypes.DECIMAL(15, 2),
    // userId: { type: DataTypes.INTEGER, foreignKey: true }, // Declaração opcional.
    // productTypeId: { type: DataTypes.INTEGER, foreignKey: true }, // Declaração opcional.
    // productConditionId: { type: DataTypes.INTEGER, foreignKey: true }, // Declaração opcional.
    // infoFromCepId: { type: DataTypes.INTEGER, foreignKey: true }, // Declaração opcional.
  },
  {
    timestamps: false,
    tableName: 'PublishedProducts',
  });

  PublishedProducts.associate = (models) => {
    PublishedProducts.belongsTo(models.User,
      { foreignKey: 'userId', as: 'userInfo' });

    PublishedProducts.belongsTo(models.ProductType,
      { foreignKey: 'productTypeId', as: 'productType' });

    PublishedProducts.belongsTo(models.ProductCondition,
      { foreignKey: 'productConditionId', as: 'productCondition' });

    PublishedProducts.belongsTo(models.InfoFromCep,
      { foreignKey: 'infoFromCepId', as: 'infoFromCep' });

    PublishedProducts.hasMany(models.ProductPictures,
      { foreignKey: 'productId', as: 'productPictures' });
  };

  return PublishedProducts;
};