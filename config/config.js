require('dotenv').config();

module.exports = {
  development: {
    username: process.env.JAWS_DB_USERNAME,
    password: process.env.JAWS_DB_PASSWORD,
    database: process.env.JAWS_DB_NAME,
    host: process.env.HOST,
    dialect: 'mysql',
  },
  test: {
    username: process.env.JAWS_DB_USERNAME,
    password: process.env.JAWS_DB_PASSWORD,
    database: 'izi_tech_test',
    host: process.env.HOST,
    dialect: 'mysql',
  },
  production: {
    username: process.env.JAWS_DB_USERNAME,
    password: process.env.JAWS_DB_PASSWORD,
    database: 'izi_tech_production',
    host: process.env.HOST,
    dialect: 'mysql',
  },
};
