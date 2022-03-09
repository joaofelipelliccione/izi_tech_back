module.exports = (sequelize, DataTypes) => {
  const ProductLine = sequelize.define('ProductLine', {
    productLineId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    productLineName: DataTypes.STRING,
    // topCategoryId: { type: DataTypes.INTEGER, foreignKey: true }, // Declaração opcional.
  },
  {
    timestamps: false,
    tableName: 'ProductLine',
  });

  ProductLine.associate = (models) => {
    ProductLine.belongsTo(models.ProductTopCategory,
      { foreignKey: 'topCategoryId', as: 'topCategory' });

    ProductLine.hasMany(models.ProductType,
      { foreignKey: 'productLineId', as: 'productType' });
  };

  return ProductLine;
};