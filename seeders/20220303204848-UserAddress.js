/* eslint-disable max-lines-per-function */

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('UserAddress',
      [{
        userAddressId: 1,
        complement: 'número 15, APTO 801',
        infoFromCepId: 1,
      },
      {
        userAddressId: 2,
        complement: 'número 72, APTO 402',
        infoFromCepId: 2,
      },
      {
        userAddressId: 3,
        complement: 'número 243, APTO 701',
        infoFromCepId: 3,
      },
      {
        userAddressId: 4,
        complement: 'número 15, APTO 801',
        infoFromCepId: 1,
      },
      {
        userAddressId: 5,
        complement: null,
        infoFromCepId: null,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('UserAddress', null, {});
  },
};