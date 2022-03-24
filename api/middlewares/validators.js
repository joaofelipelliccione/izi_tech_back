const { StatusCodes } = require('http-status-codes');

const userNameValidatorForPost = (req, res, next) => { // Validado!
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

const mailValidatorForPost = (req, res, next) => { // Validado!
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

const passwordValidatorForPost = (req, res, next) => { // Validado!
  const { userPassword } = req.body;

  const validatePasswordFormatRgx = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})');
  const isPasswordFormatValid = validatePasswordFormatRgx.test(userPassword);

  if (!userPassword || userPassword === '' || userPassword === null) {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"userPassword" deve ser fornecida, não pode ser vazia e nem igual à null.',
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

const userNameValidatorForPut = (req, res, next) => { // Validado!
  const { userName } = req.body;

  if (userName === '' || userName === null) {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"userName" não pode ser vazio e nem igual à null.',
    });
  }

  next();
};

const passwordValidatorForPut = (req, res, next) => { // Validado!
  const { userPassword } = req.body;

  const validatePasswordFormatRgx = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})');
  const isPasswordFormatValid = validatePasswordFormatRgx.test(userPassword);

  if (userPassword === '' || userPassword === null) {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"userPassword" não pode ser vazia e nem igual à null.',
    });
  }

  if (userPassword && !isPasswordFormatValid) {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"userPassword" não apresenta um formato válido.',
    });
  }

  next();
};

const cpfValidatorForPut = (req, res, next) => { // Validado!
  const { userCPF } = req.body;

  const validateCpfFormatRgx = /(\d{3}).(\d{3}).(\d{3})-(\d{2})/;
  const isCpfFormatValid = validateCpfFormatRgx.test(userCPF);

  if (userCPF === '') {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"userCPF" não pode ser vazio.',
    });
  }

  if (userCPF && !isCpfFormatValid) {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"userCPF" não apresenta um formato válido.',
    });
  }

  next();
};

const cellphoneValidatorForPut = (req, res, next) => { // Validado!
  const { userCellphone } = req.body;

  const validateCellphoneFormatRgx = /\((\d{2})\) (\d{5})-(\d{4})/;
  const isCellphoneFormatValid = validateCellphoneFormatRgx.test(userCellphone);

  if (userCellphone === '') {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"userCellphone" não pode ser vazio.',
    });
  }

  if (userCellphone && !isCellphoneFormatValid) {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"userCellphone" não apresenta um formato válido.',
    });
  }

  next();
};

const userPictureValidatorForPut = (req, res, next) => { // Validado!
  const { userPicture } = req.body;

  if (userPicture === '') {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"userPicture" não pode ser vazio.',
    });
  }

  next();
};

const userAddressIdValidatorForPut = (req, res, next) => { // Validado!
  const { userAddressId } = req.body;

  if (!userAddressId || userAddressId === '' || typeof (userAddressId) !== 'number') {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"userAddressId" é um parâmetro obrigatório. '
      + 'Deve ser sempre fornecido, não pode ser vazio e precisa apresentar formato numérico.',
    });
  }

  next();
};

const cepValidatorForPut = (req, res, next) => { // Validado!
  const { cep } = req.body;

  const validateCepFormatRgx = /(\d{5})-(\d{3})/;
  const isCepFormatValid = validateCepFormatRgx.test(cep);

  if (cep === '' || cep === undefined) {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"cep" é um parâmetro obrigatório. Deve ser sempre fornecido e não pode ser vazio.',
    });
  }

  if (cep && !isCepFormatValid) {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"cep" não apresenta um formato válido.',
    });
  }

  next();
};

const productIdValidator = (req, res, next) => { // Validado!
  const { productId } = req.body;

  if (!productId || productId === '' || typeof (productId) !== 'number') {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"productId" deve ser fornecido, não pode ser vazio e '
      + 'deve apresentar formato numérico.',
    });
  }

  next();
};

module.exports = {
  userNameValidatorForPost,
  mailValidatorForPost,
  passwordValidatorForPost,
  userNameValidatorForPut,
  passwordValidatorForPut,
  cpfValidatorForPut,
  cellphoneValidatorForPut,
  userPictureValidatorForPut,
  cepValidatorForPut,
  userAddressIdValidatorForPut,
  productIdValidator,
};