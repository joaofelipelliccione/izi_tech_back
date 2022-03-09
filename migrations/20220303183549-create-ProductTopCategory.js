module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductTopCategory', {
      topCategoryId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      topCategoryName: {
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('ProductTopCategory');
  },
};