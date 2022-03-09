/* eslint-disable max-lines-per-function */

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userName: DataTypes.STRING,
    userMail: DataTypes.STRING,
    userPassword: DataTypes.STRING,
    userBirthday: DataTypes.DATEONLY, // Ex: YYYY-MM-DD
    userCPF: DataTypes.STRING(14), // Ex: XXX.XXX.XXX-XX
    userCellphone: DataTypes.STRING(15), // Ex: (xx) XXXXX-XXXX
    userPicture: DataTypes.STRING,
    dateOfRegister: DataTypes.DATEONLY, // Ex: YYYY-MM-DD
    // userAddressId: { type: DataTypes.INTEGER, foreignKey: true }, // Declaração opcional.
  },
  {
    timestamps: false,
    tableName: 'User',
  });

  User.associate = (models) => {
    User.belongsTo(models.UserAddress,
      { foreignKey: 'userAddressId', as: 'userAddress' });

    User.hasMany(models.PublishedProducts,
      { foreignKey: 'userId', as: 'publishedProducts' });
  };

  return User;
};