module.exports = (sequelize, DataTypes) => {
  const ProductCondition = sequelize.define('ProductCondition', {
    productConditionId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    productConditionName: DataTypes.STRING(2),
    productConditionDescription: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'ProductCondition',
  });

  ProductCondition.associate = (models) => {
    ProductCondition.hasMany(models.PublishedProducts,
      { foreignKey: 'productConditionId', as: 'publishedProducts' });
  };

  return ProductCondition;
};