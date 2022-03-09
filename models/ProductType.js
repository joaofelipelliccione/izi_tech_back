module.exports = (sequelize, DataTypes) => {
  const ProductType = sequelize.define('ProductType', {
    productTypeId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    productTypeName: DataTypes.STRING,
    // productLineId: { type: DataTypes.INTEGER, foreignKey: true }, // Declaração opcional.
  },
  {
    timestamps: false,
    tableName: 'ProductType',
  });

  ProductType.associate = (models) => {
    ProductType.belongsTo(models.ProductLine,
      { foreignKey: 'productLineId', as: 'productLine' });

    ProductType.hasMany(models.PublishedProducts,
      { foreignKey: 'productTypeId', as: 'publishedProducts' });
  };

  return ProductType;
};