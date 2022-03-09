/* eslint-disable max-lines-per-function */

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('FavoriteProducts',
      [
        { userId: 1, productId: 2 },
        { userId: 1, productId: 4 },
        { userId: 1, productId: 7 },
        { userId: 3, productId: 1 },
        { userId: 3, productId: 6 },
        { userId: 4, productId: 1 },
        { userId: 4, productId: 3 },
        { userId: 4, productId: 8 },
        { userId: 4, productId: 9 },
        { userId: 5, productId: 5 },
        { userId: 5, productId: 8 },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('FavoriteProducts', null, {});
  },
};