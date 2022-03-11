require('dotenv').config();
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      code: StatusCodes.UNAUTHORIZED,
      message: 'Nenhum token informado.',
    });
  }

  try {
    const decoded = jwt.verify(authorization, SECRET);
    req.userInfo = decoded;

    next();
  } catch (error) {
    return res.status(StatusCodes.UNAUTHORIZED)
    .json({
      code: StatusCodes.UNAUTHORIZED,
      message: 'Token expirado ou inválido.',
    });
  }
};