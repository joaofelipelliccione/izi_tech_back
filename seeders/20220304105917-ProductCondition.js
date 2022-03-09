/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('ProductCondition',
      [{
        productConditionId: 1,
        productConditionName: 'AA',
        productConditionDescription: 'nunca usado: produto zero. Deve apresentar todos os acessórios originais em sua respectiva caixa oficial, lacrada.',
      },
      {
        productConditionId: 2,
        productConditionName: 'A',
        productConditionDescription: 'como novo: produto em excelente condição. Deve apresentar todos os acessórios originais em sua respectiva caixa oficial.',
      },
      {
        productConditionId: 3,
        productConditionName: 'B',
        productConditionDescription: 'bom estado: produto em boas condições. Deve apresentar todos os acessórios originais, essenciais para pleno funcionamento. Não precisa acompanhar a caixa original.',
      },
      {
        productConditionId: 4,
        productConditionName: 'C',
        productConditionDescription: 'peça: parte funcional oriunda de aparelho quebrado. Exemplo: display de um notebook cuja placa não apresenta conserto.',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('ProductCondition', null, {});
  },
};