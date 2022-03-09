/* eslint-disable max-lines-per-function */

require('dotenv').config();
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const verifyToken = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(StatusCodes.NOT_FOUND).json({
      code: StatusCodes.NOT_FOUND,
      message: 'Nenhum token informado.',
    });
  }

  try {
    jwt.verify(authorization, SECRET);
    return res.status(StatusCodes.OK).json({
      code: StatusCodes.OK,
      message: 'Token válido.',
    });
  } catch (error) {
    return res.status(StatusCodes.OK)
    .json({
      code: StatusCodes.UNAUTHORIZED,
      message: 'Token expirado ou inválido.',
    });
  }
};

module.exports = {
  verifyToken,
};