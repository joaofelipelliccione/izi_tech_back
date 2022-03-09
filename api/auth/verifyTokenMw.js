require('dotenv').config();
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(StatusCodes.NOT_FOUND).json({
      code: StatusCodes.NOT_FOUND,
      message: 'Nenhum token informado.',
    });
  }

  try {
    jwt.verify(authorization, SECRET);
    next();
  } catch (error) {
    return res.status(StatusCodes.UNAUTHORIZED)
    .json({
      code: StatusCodes.UNAUTHORIZED,
      message: 'Token expirado ou inválido.',
    });
  }
};