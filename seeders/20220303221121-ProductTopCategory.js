/* eslint-disable max-lines-per-function */

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('ProductTopCategory',
      [{
        topCategoryId: 1,
        topCategoryName: 'telefonia',
      },
      {
        topCategoryId: 2,
        topCategoryName: 'informática',
      },
      {
        topCategoryId: 3,
        topCategoryName: 'games',
      },
      {
        topCategoryId: 4,
        topCategoryName: 'eletrônicos, áudio e vídeo',
      },
      {
        topCategoryId: 5,
        topCategoryName: 'veículos elétricos leves',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('ProductTopCategory', null, {});
  },
};