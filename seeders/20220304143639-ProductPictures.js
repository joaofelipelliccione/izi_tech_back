/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-lines-per-function */

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('ProductPictures',
      [{
        productPictureId: 1,
        productPicturePath: './publishedProductsPictures/controleXboxPic1.jpg',
        productId: 1,
      },
      {
        productPictureId: 2,
        productPicturePath: './publishedProductsPictures/controleXboxPic2.jpg',
        productId: 1,
      },
      {
        productPictureId: 3,
        productPicturePath: './publishedProductsPictures/appleTvPic1.jpg',
        productId: 2,
      },
      {
        productPictureId: 4,
        productPicturePath: './publishedProductsPictures/appleTvPic2.jpg',
        productId: 2,
      },
      {
        productPictureId: 5,
        productPicturePath: './publishedProductsPictures/dellInspironPic1.jpg',
        productId: 3,
      },
      {
        productPictureId: 6,
        productPicturePath: './publishedProductsPictures/dellInspironPic2.jpg',
        productId: 3,
      },
      {
        productPictureId: 7,
        productPicturePath: '/publishedProductsPictures/dellInspironPic3.jpg',
        productId: 3,
      },
      {
        productPictureId: 8,
        productPicturePath: './publishedProductsPictures/echoDotPic1.jpg',
        productId: 4,
      },
      {
        productPictureId: 9,
        productPicturePath: './publishedProductsPictures/echoDotPic2.jpg',
        productId: 4,
      },
      {
        productPictureId: 10,
        productPicturePath: './publishedProductsPictures/echoDotPic3.jpg',
        productId: 4,
      },
      {
        productPictureId: 11,
        productPicturePath: './publishedProductsPictures/intelI7Pic1.jpg',
        productId: 5,
      },
      {
        productPictureId: 12,
        productPicturePath: './publishedProductsPictures/intelI7Pic2.jpg',
        productId: 5,
      },
      {
        productPictureId: 13,
        productPicturePath: './publishedProductsPictures/headphoneSonyPic1.jpg',
        productId: 6,
      },
      {
        productPictureId: 14,
        productPicturePath: './publishedProductsPictures/headphoneSonyPic2.jpg',
        productId: 6,
      },
      {
        productPictureId: 15,
        productPicturePath: './publishedProductsPictures/iphoneXPic1.jpg',
        productId: 7,
      },
      {
        productPictureId: 16,
        productPicturePath: './publishedProductsPictures/iphoneXPic2.jpg',
        productId: 7,
      },
      {
        productPictureId: 17,
        productPicturePath: './publishedProductsPictures/placaDeVideoPic1.jpg',
        productId: 8,
      },
      {
        productPictureId: 18,
        productPicturePath: './publishedProductsPictures/ps4ProPic1.jpg',
        productId: 9,
      },
      {
        productPictureId: 19,
        productPicturePath: './publishedProductsPictures/ps4ProPic2.jpg',
        productId: 9,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('ProductPictures', null, {});
  },
};