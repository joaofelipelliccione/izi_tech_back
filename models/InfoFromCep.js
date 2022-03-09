/* eslint-disable max-lines-per-function */

module.exports = (sequelize, DataTypes) => {
  const InfoFromCep = sequelize.define('InfoFromCep', {
    infoFromCepId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cep: DataTypes.STRING(9), // Ex: XXXXX-XXX
    street: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    uf: DataTypes.STRING(2),
    ddd: DataTypes.STRING(2),
  },
  {
    timestamps: false,
    tableName: 'InfoFromCep',
  });

  InfoFromCep.associate = (models) => {
    InfoFromCep.hasMany(models.UserAddress,
      { foreignKey: 'infoFromCepId', as: 'userAddress' });

    InfoFromCep.hasMany(models.PublishedProducts,
      { foreignKey: 'infoFromCepId', as: 'publishedProducts' });
  };

  return InfoFromCep;
};