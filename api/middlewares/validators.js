const { StatusCodes } = require('http-status-codes');

const mailFormatValidator = (req, res, next) => {
  const { userMail } = req.body;

  const validateMailFormatRgx = /\S+@\S+\.\S+/;
  const isMailFormatValid = validateMailFormatRgx.test(userMail);

  if (!userMail || userMail === '') {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"userMail" deve ser fornecido e não pode ser vazio.',
    });
  }

  if (!isMailFormatValid) {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"userMail" não apresenta um formato válido.',
    });
  }

  next();
};

const passwordFormatValidator = (req, res, next) => {
  const { userPassword } = req.body;

  const validatePasswordFormatRgx = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})');
  const isPasswordFormatValid = validatePasswordFormatRgx.test(userPassword);

  if (!userPassword || userPassword === '') {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"userPassword" deve ser fornecida e não pode ser vazia.',
    });
  }

  if (!isPasswordFormatValid) {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"userPassword" não apresenta um formato válido.',
    });
  }

  next();
};

const userNameGapValidator = (req, res, next) => {
  const { userName } = req.body;

  if (!userName || userName === '') {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"userName" deve ser fornecido e não pode ser vazio.',
    });
  }

  next();
};

const cepFormatValidator = (req, res, next) => {
  const { cep } = req.body;

  const validateCepFormatRgx = /(\d{5})-(\d{3})/;
  const isCepFormatValid = validateCepFormatRgx.test(cep);

  if (!cep || cep === '') {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"cep" deve ser fornecido e não pode ser vazio.',
    });
  }

  if (!isCepFormatValid) {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"cep" não apresenta um formato válido.',
    });
  }

  next();
};

const userAddressIdGapValidator = (req, res, next) => {
  const { userAddressId } = req.body;

  if (!userAddressId || userAddressId === '' || typeof (userAddressId) !== 'number') {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"userAddressId" deve ser fornecido, não pode ser vazio e deve ser um número.',
    });
  }

  next();
};

module.exports = {
  mailFormatValidator,
  passwordFormatValidator,
  userNameGapValidator,
  cepFormatValidator,
  userAddressIdGapValidator,
};