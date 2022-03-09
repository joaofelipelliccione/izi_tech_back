module.exports = (sequelize, DataTypes) => {
  const UserAddress = sequelize.define('UserAddress', {
    userAddressId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    complement: DataTypes.STRING,
    // infoFromCepId: { type: DataTypes.INTEGER, foreignKey: true }, // Declaração opcional.
  },
  {
    timestamps: false,
    tableName: 'UserAddress',
  });

  UserAddress.associate = (models) => {
    UserAddress.hasOne(models.User,
      { foreignKey: 'userAddressId', as: 'userInfo' });

    UserAddress.belongsTo(models.InfoFromCep,
      { foreignKey: 'infoFromCepId', as: 'infoFromCep' });
  };

  return UserAddress;
};