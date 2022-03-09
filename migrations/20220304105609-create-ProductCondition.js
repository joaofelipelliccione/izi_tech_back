module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductCondition', {
      productConditionId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productConditionName: {
        type: Sequelize.STRING(2),
      },
      productConditionDescription: {
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('ProductCondition');
  },
};