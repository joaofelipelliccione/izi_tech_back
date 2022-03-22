/* eslint-disable max-len */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-lines-per-function */

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('ProductPictures',
      [{
        productPictureId: 1,
        productPicturePath: 'https://storage.googleapis.com/gcsb-izi-tech-product-pictures/1_80abb2c4-29d7-4286-9fa2-61c724253882.jpg',
        productId: 1,
      },
      {
        productPictureId: 2,
        productPicturePath: 'https://storage.googleapis.com/gcsb-izi-tech-product-pictures/1_ed50c694-e0e1-49dc-9c8e-aa9f384332f1.jpg',
        productId: 1,
      },
      {
        productPictureId: 3,
        productPicturePath: 'https://storage.googleapis.com/gcsb-izi-tech-product-pictures/2_6931c6d0-50f4-4fcc-b6a9-2b53e70a1731.jpg',
        productId: 2,
      },
      {
        productPictureId: 4,
        productPicturePath: 'https://storage.googleapis.com/gcsb-izi-tech-product-pictures/2_a1c1519b-af88-4690-92f9-002c47a9caff.jpg',
        productId: 2,
      },
      {
        productPictureId: 5,
        productPicturePath: 'https://storage.googleapis.com/gcsb-izi-tech-product-pictures/3_05edbead-c747-4318-b51a-35e85a6a451b.jpg',
        productId: 3,
      },
      {
        productPictureId: 6,
        productPicturePath: 'https://storage.googleapis.com/gcsb-izi-tech-product-pictures/3_1b3d78dd-05a9-4670-be1f-a01d239bfbc8.jpg',
        productId: 3,
      },
      {
        productPictureId: 7,
        productPicturePath: 'https://storage.googleapis.com/gcsb-izi-tech-product-pictures/3_71d2b85b-f702-4906-9b7f-989a35920a4f.jpg',
        productId: 3,
      },
      {
        productPictureId: 8,
        productPicturePath: 'https://storage.googleapis.com/gcsb-izi-tech-product-pictures/4_1120a540-1d03-4833-b731-fd2ecaa43e5d.jpg',
        productId: 4,
      },
      {
        productPictureId: 9,
        productPicturePath: 'https://storage.googleapis.com/gcsb-izi-tech-product-pictures/4_581f57e5-3fe7-4876-a097-26bfaf1ad760.jpg',
        productId: 4,
      },
      {
        productPictureId: 10,
        productPicturePath: 'https://storage.googleapis.com/gcsb-izi-tech-product-pictures/4_85e24df4-7e48-4cca-ad5c-e7e21e5ddb00.jpg',
        productId: 4,
      },
      {
        productPictureId: 11,
        productPicturePath: 'https://storage.googleapis.com/gcsb-izi-tech-product-pictures/5_099afc52-3856-4147-bce8-0a80ff00f81e.jpg',
        productId: 5,
      },
      {
        productPictureId: 12,
        productPicturePath: 'https://storage.googleapis.com/gcsb-izi-tech-product-pictures/5_2830435e-0df9-4eb8-84d3-20ac205ec7b6.jpg',
        productId: 5,
      },
      {
        productPictureId: 13,
        productPicturePath: 'https://storage.googleapis.com/gcsb-izi-tech-product-pictures/6_3adfbf67-a0bb-4239-9ff1-631a3df68bc7.jpg',
        productId: 6,
      },
      {
        productPictureId: 14,
        productPicturePath: 'https://storage.googleapis.com/gcsb-izi-tech-product-pictures/6_db7cbd35-5cf8-44b9-8f97-4876b3fb7187.jpg',
        productId: 6,
      },
      {
        productPictureId: 15,
        productPicturePath: 'https://storage.googleapis.com/gcsb-izi-tech-product-pictures/7_2560f2d9-16f1-4129-95ee-264c4ad31d46.jpg',
        productId: 7,
      },
      {
        productPictureId: 16,
        productPicturePath: 'https://storage.googleapis.com/gcsb-izi-tech-product-pictures/7_6d07b286-7281-48cc-bd8a-d892394c951e.jpg',
        productId: 7,
      },
      {
        productPictureId: 17,
        productPicturePath: 'https://storage.googleapis.com/gcsb-izi-tech-product-pictures/8_a67a5415-848d-4dae-87e6-0b9c4432d241.jpg',
        productId: 8,
      },
      {
        productPictureId: 18,
        productPicturePath: 'https://storage.googleapis.com/gcsb-izi-tech-product-pictures/9_6fbd3017-69d0-4a18-a14f-3b16b8fe9731.jpg',
        productId: 9,
      },
      {
        productPictureId: 19,
        productPicturePath: 'https://storage.googleapis.com/gcsb-izi-tech-product-pictures/9_a26baf04-5d36-49fe-a326-8318edd42a98.jpg',
        productId: 9,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('ProductPictures', null, {});
  },
};