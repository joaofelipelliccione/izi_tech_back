/* eslint-disable max-lines-per-function */

module.exports = (sequelize, _DataTypes) => {
  const FavoriteProducts = sequelize.define('FavoriteProducts', {
    // Tabela de Junção
    // userId: { type: DataTypes.INTEGER, foreignKey: true }, // Declaração opcional.
    // productId: { type: DataTypes.INTEGER, foreignKey: true }, // Declaração opcional.
  },
  {
    timestamps: false,
    tableName: 'FavoriteProducts',
  });

  FavoriteProducts.associate = (models) => {
    models.User.belongsToMany(models.PublishedProducts, {
      as: 'favoriteProducts',
      through: FavoriteProducts,
      foreignKey: 'userId',
      otherKey: 'productId',
    });
    models.PublishedProducts.belongsToMany(models.User, {
      as: 'user',
      through: FavoriteProducts,
      foreignKey: 'productId',
      otherKey: 'userId',
    });
  };

  return FavoriteProducts;
};