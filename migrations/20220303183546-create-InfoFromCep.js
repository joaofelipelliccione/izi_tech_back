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
        type: Sequelize.STRING(9),
      },
      street: {
        type: Sequelize.STRING,
      },
      neighborhood: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      uf: {
        type: Sequelize.STRING(2),
      },
      ddd: {
        type: Sequelize.STRING(2),
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('InfoFromCep');
  },
};