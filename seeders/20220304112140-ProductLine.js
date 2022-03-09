/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('ProductLine',
      [{
        productLineId: 1,
        productLineName: 'smartphones',
        topCategoryId: 1,
      },
      {
        productLineId: 2,
        productLineName: 'telefones Voip',
        topCategoryId: 1,
      },
      {
        productLineId: 3,
        productLineName: 'desktops, mini-pcs e all-in-ones',
        topCategoryId: 2,
      },
      {
        productLineId: 4,
        productLineName: 'notebooks',
        topCategoryId: 2,
      },
      {
        productLineId: 5,
        productLineName: 'tablets',
        topCategoryId: 2,
      },
      {
        productLineId: 6,
        productLineName: 'processadores',
        topCategoryId: 2,
      },
      {
        productLineId: 7,
        productLineName: 'placas de vídeo e placas de som',
        topCategoryId: 2,
      },
      {
        productLineId: 8,
        productLineName: 'placas mãe',
        topCategoryId: 2,
      },
      {
        productLineId: 9,
        productLineName: 'memória interna (RAM)',
        topCategoryId: 2,
      },
      {
        productLineId: 10,
        productLineName: 'armazenamento de dados',
        topCategoryId: 2,
      },
      {
        productLineId: 11,
        productLineName: 'fontes',
        topCategoryId: 2,
      },
      {
        productLineId: 12,
        productLineName: 'gabinetes',
        topCategoryId: 2,
      },
      {
        productLineId: 13,
        productLineName: 'refrigeração',
        topCategoryId: 2,
      },
      {
        productLineId: 14,
        productLineName: 'monitores',
        topCategoryId: 2,
      },
      {
        productLineId: 15,
        productLineName: 'rede e internet',
        topCategoryId: 2,
      },
      {
        productLineId: 16,
        productLineName: 'drives ópticos',
        topCategoryId: 2,
      },
      {
        productLineId: 17,
        productLineName: 'periféricos',
        topCategoryId: 2,
      },
      {
        productLineId: 18,
        productLineName: 'impressão',
        topCategoryId: 2,
      },
      {
        productLineId: 19,
        productLineName: 'PC',
        topCategoryId: 3,
      },
      {
        productLineId: 20,
        productLineName: 'Playstation 5',
        topCategoryId: 3,
      },
      {
        productLineId: 21,
        productLineName: 'Playstation 4 ou Playstation 4 Pro',
        topCategoryId: 3,
      },
      {
        productLineId: 22,
        productLineName: 'Playstation 3',
        topCategoryId: 3,
      },
      {
        productLineId: 23,
        productLineName: 'Playstation 2',
        topCategoryId: 3,
      },
      {
        productLineId: 24,
        productLineName: 'PSP',
        topCategoryId: 3,
      },
      {
        productLineId: 25,
        productLineName: 'PSP Vita',
        topCategoryId: 3,
      },
      {
        productLineId: 26,
        productLineName: 'Xbox Series S ou Xbox Series X',
        topCategoryId: 3,
      },
      {
        productLineId: 27,
        productLineName: 'Xbox One S ou Xbox One X',
        topCategoryId: 3,
      },
      {
        productLineId: 28,
        productLineName: 'Xbox 360',
        topCategoryId: 3,
      },
      {
        productLineId: 29,
        productLineName: 'Xbox',
        topCategoryId: 3,
      },
      {
        productLineId: 30,
        productLineName: 'Nintendo Switch OLED',
        topCategoryId: 3,
      },
      {
        productLineId: 31,
        productLineName: 'Nintendo Switch Lite',
        topCategoryId: 3,
      },
      {
        productLineId: 32,
        productLineName: 'Nintendo Switch v2',
        topCategoryId: 3,
      },
      {
        productLineId: 33,
        productLineName: 'Nintendo Switch v1',
        topCategoryId: 3,
      },
      {
        productLineId: 34,
        productLineName: 'Nintendo Wii U',
        topCategoryId: 3,
      },
      {
        productLineId: 35,
        productLineName: 'Nintendo Wii',
        topCategoryId: 3,
      },
      {
        productLineId: 36,
        productLineName: 'Nintendo 3DS',
        topCategoryId: 3,
      },
      {
        productLineId: 37,
        productLineName: 'Retrô',
        topCategoryId: 3,
      },
      {
        productLineId: 38,
        productLineName: 'dispositivos inteligentes',
        topCategoryId: 4,
      },
      {
        productLineId: 39,
        productLineName: 'TVs e smart TVs',
        topCategoryId: 4,
      },
      {
        productLineId: 40,
        productLineName: 'dispositivos de streaming de mídia',
        topCategoryId: 4,
      },
      {
        productLineId: 41,
        productLineName: 'dispositivos de vídeo',
        topCategoryId: 4,
      },
      {
        productLineId: 42,
        productLineName: 'dispositivos de áudio',
        topCategoryId: 4,
      },
      {
        productLineId: 43,
        productLineName: 'câmeras',
        topCategoryId: 4,
      },
      {
        productLineId: 44,
        productLineName: 'drones',
        topCategoryId: 4,
      },
      {
        productLineId: 45,
        productLineName: 'veículos elétricos leves',
        topCategoryId: 5,
      },
      {
        productLineId: 46,
        productLineName: 'emuladores',
        topCategoryId: 3,
      },
      {
        productLineId: 47,
        productLineName: 'Steam Deck',
        topCategoryId: 3,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('ProductCondition', null, {});
  },
};