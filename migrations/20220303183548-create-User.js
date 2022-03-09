/* eslint-disable max-lines-per-function */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User', {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userMail: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userPassword: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userBirthday: {
        allowNull: true,
        type: Sequelize.DATEONLY,
      },
      userCPF: {
        allowNull: true,
        type: Sequelize.STRING(14),
      },
      userCellphone: {
        allowNull: true,
        type: Sequelize.STRING(15),
      },
      userPicture: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      dateOfRegister: {
        allowNull: true,
        type: Sequelize.DATEONLY,
      },
      userAddressId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'UserAddress',
          key: 'userAddressId',
        },
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('User');
  },
};