/* eslint-disable max-lines-per-function */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PublishedProducts', {
      productId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      publicationDate: {
        type: Sequelize.DATEONLY,
      },
      productTitle: {
        type: Sequelize.STRING(100),
      },
      productDescription: {
        type: Sequelize.STRING(1000),
      },
      productAcceptChange: {
        type: Sequelize.BOOLEAN,
      },
      productPrice: {
        type: Sequelize.DECIMAL(15, 2),
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'User',
          key: 'userId',
        },
      },
      productTypeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'ProductType',
          key: 'productTypeId',
        },
      },
      productConditionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'ProductCondition',
          key: 'productConditionId',
        },
      },
      infoFromCepId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'InfoFromCep',
          key: 'infoFromCepId',
        },
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('PublishedProducts');
  },
};