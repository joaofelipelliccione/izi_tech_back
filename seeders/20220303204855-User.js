/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-lines-per-function */

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('User',
      [{
        userId: 1,
        userName: 'João Felipe Pelliccione',
        userMail: 'jf.pelliccione@gmail.com',
        userPassword: 'Joao1234',
        userBirthday: '1998-10-23',
        userCPF: '180.559.177-01',
        userCellphone: '(21) 97257-4272',
        userPicture: './registeredUsersPictures/jfProfilePic.jpeg',
        dateOfRegister: '2020-08-05',
        userAddressId: 1,
      },
      {
        userId: 2,
        userName: 'Luiza Sayão',
        userMail: 'luizasayao2009@hotmail.com',
        userPassword: 'Luiza1234',
        userBirthday: '1998-12-12',
        userCPF: '180.143.187-65',
        userCellphone: '(21) 99945-1971',
        userPicture: './registeredUsersPictures/luProfilePic.jpeg',
        dateOfRegister: '2020-10-17',
        userAddressId: 2,
      },
      {
        userId: 3,
        userName: 'Ana Victória Pelliccione',
        userMail: 'vivica.pelli@yahoo.com.br',
        userPassword: 'Vivi1234',
        userBirthday: '1994-09-02',
        userCPF: '154.328.037-47',
        userCellphone: '(21) 99519-4210',
        userPicture: './registeredUsersPictures/viviProfilePic.jpeg',
        dateOfRegister: '2021-01-04',
        userAddressId: 3,
      },
      {
        userId: 4,
        userName: 'André Cunha',
        userMail: 'arcunha_br@yahoo.com.br',
        userPassword: 'Andre1234',
        userBirthday: '1960-09-17',
        userCPF: '667.446.877-01',
        userCellphone: '(21) 99917-1710',
        userPicture: './registeredUsersPictures/andreProfilePic.jpeg',
        dateOfRegister: '2021-02-15',
        userAddressId: 4,
      },
      {
        userId: 5,
        userName: 'Pipa The Dog',
        userMail: 'pipathedog@outlook.com',
        userPassword: 'Pipa1234',
        userBirthday: null,
        userCPF: null,
        userCellphone: null,
        userPicture: null,
        dateOfRegister: '2020-12-27',
        userAddressId: null,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('User', null, {});
  },
};