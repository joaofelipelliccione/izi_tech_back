module.exports = (sequelize, DataTypes) => {
  const ProductPictures = sequelize.define('ProductPictures', {
    productPictureId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    productPicturePath: DataTypes.STRING,
    // productId: { type: DataTypes.INTEGER, foreignKey: true }, // Declaração opcional.
  },
  {
    timestamps: false,
    tableName: 'ProductPictures',
  });

  ProductPictures.associate = (models) => {
    ProductPictures.belongsTo(models.PublishedProducts,
      { foreignKey: 'productId', as: 'publishedProducts' });
  };

  return ProductPictures;
};