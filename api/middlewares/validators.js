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

module.exports = {
  mailFormatValidator,
  passwordFormatValidator,
};