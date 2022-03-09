module.exports = (sequelize, DataTypes) => {
  const ProductTopCategory = sequelize.define('ProductTopCategory', {
    topCategoryId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    topCategoryName: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'ProductTopCategory',
  });

  ProductTopCategory.associate = (models) => {
    ProductTopCategory.hasMany(models.ProductLine,
      { foreignKey: 'topCategoryId', as: 'productLine' });
  };

  return ProductTopCategory;
};