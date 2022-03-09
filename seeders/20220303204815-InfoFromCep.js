/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-lines-per-function */

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('InfoFromCep',
      [{
        infoFromCepId: 1,
        cep: '22451-130',
        street: 'Rua Piratininga',
        neighborhood: 'Gávea',
        city: 'Rio de Janeiro',
        uf: 'RJ',
        ddd: '21',
      },
      {
        infoFromCepId: 2,
        cep: '22431-001',
        street: 'Avenida Bartolomeu Mitre',
        neighborhood: 'Leblon',
        city: 'Rio de Janeiro',
        uf: 'RJ',
        ddd: '21',
      },
      {
        infoFromCepId: 3,
        cep: '22261-005',
        street: 'Rua do Humaitá',
        neighborhood: 'Humaitá',
        city: 'Rio de Janeiro',
        uf: 'RJ',
        ddd: '21',
      },
      {
        infoFromCepId: 4,
        cep: '01310-200',
        street: 'Avenida Paulista',
        neighborhood: 'Bela Vista',
        city: 'São Paulo',
        uf: 'SP',
        ddd: '11',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('InfoFromCep', null, {});
  },
};