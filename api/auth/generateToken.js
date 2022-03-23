require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

module.exports = async (userMail, userPassword, userId) => {
  const user = { userMail, userPassword, userId };
  
  const authToken = jwt.sign(user, SECRET, {
    algorithm: 'HS256',
    expiresIn: '7d',
  });

  return authToken;
};
