/* eslint-disable max-lines-per-function */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('InfoFromCep', {
      infoFromCepId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cep: {
        allowNull: false,
        type: Sequelize.STRING(9),
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      neighborhood: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      uf: {
        allowNull: false,
        type: Sequelize.STRING(2),
      },
      ddd: {
        allowNull: false,
        type: Sequelize.STRING(2),
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('InfoFromCep');
  },
};