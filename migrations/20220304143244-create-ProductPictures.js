/* eslint-disable max-lines-per-function */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductPictures', {
      productPictureId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productPicturePath: {
        type: Sequelize.STRING,
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'PublishedProducts',
          key: 'productId',
        },
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('ProductPictures');
  },
};