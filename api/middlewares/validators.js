/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-lines */
const { StatusCodes } = require('http-status-codes');

const userIdValidatorForPost = (req, res, next) => { // Validado!
  const { userId } = req.body;

  if (!userId || userId === '' || typeof userId !== 'number') {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"userId" deve ser fornecido, não pode ser vazio e '
      + 'precisa apresentar formato numérico.',
    });
  }

  next();
};

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

const cepValidatorForPutOrPost = (req, res, next) => { // Validado!
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

const productTitleValidatorForPost = (req, res, next) => { // Validado!
  const { productTitle } = req.body;

  if (!productTitle || productTitle === '') {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"productTitle" deve ser fornecido e não pode ser vazio.',
    });
  }

  next();
};

const productDescriptionForPost = (req, res, next) => { // Validado!
  const { productDescription } = req.body;

  if (!productDescription || productDescription.length < 30) {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"productDescription" deve ser fornecido, não pode ser vazio e deve apresentar, '
      + 'no mínimo, 30 caracteres.',
    });
  }

  next();
};

const productAcceptChangeForPost = (req, res, next) => { // Validado!
  const { productAcceptChange } = req.body;

  if (productAcceptChange === ''
    || typeof productAcceptChange !== 'number') {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"productAcceptChange" deve ser fornecido, não pode ser vazio e '
      + 'precisa apresentar formato numérico.',
    });
  }

  next();
};

const productPriceForPost = (req, res, next) => { // Validado!
  const { productPrice } = req.body;

  if (!productPrice
    || productPrice === ''
    || typeof productPrice !== 'number') {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"productPrice" deve ser fornecido, não pode ser vazio e '
      + 'precisa apresentar formato numérico.',
    });
  }

  next();
};

const productTypeIdForPost = (req, res, next) => { // Validado!
  const { productTypeId } = req.body;

  if (!productTypeId
    || productTypeId === ''
    || typeof productTypeId !== 'number') {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"productTypeId" deve ser fornecido, não pode ser vazio e '
      + 'precisa apresentar formato numérico.',
    });
  }

  next();
};

const productConditionIdForPost = (req, res, next) => { // Validado!
  const { productConditionId } = req.body;

  if (!productConditionId
    || productConditionId === ''
    || typeof productConditionId !== 'number') {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"productConditionId" deve ser fornecido, não pode ser vazio e '
      + 'precisa apresentar formato numérico.',
    });
  }

  next();
};

const productStreetValidatorForPost = (req, res, next) => { // Validado!
  const { street } = req.body;

  if (typeof street !== 'string') {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"street" deve ser informada, mesmo sendo vazia.',
    });
  }

  next();
};

const productNeighborhoodValidatorForPost = (req, res, next) => { // Validado!
  const { neighborhood } = req.body;

  if (typeof neighborhood !== 'string') {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"neighborhood" deve ser informado, mesmo sendo vazio.',
    });
  }

  next();
};

const productCityValidatorForPost = (req, res, next) => { // Validado!
  const { city } = req.body;

  if (typeof city !== 'string') {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"city" deve ser informada, mesmo sendo vazia.',
    });
  }

  next();
};

const productUfValidatorForPost = (req, res, next) => { // Validado!
  const { uf } = req.body;

  if (typeof uf !== 'string') {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"uf" deve ser informado, mesmo sendo vazio.',
    });
  }

  next();
};

const productDDDValidatorForPost = (req, res, next) => { // Validado!
  const { ddd } = req.body;

  if (typeof ddd !== 'string') {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"ddd" deve ser informado, mesmo sendo vazio.',
    });
  }

  next();
};

const fileNameValidatorForDelete = (req, res, next) => { // Validado!
  const { fileName } = req.body;

  if (!fileName || fileName === '' || typeof fileName !== 'string') {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({
      code: StatusCodes.BAD_REQUEST,
      message: '"fileName" deve ser fornecido, não pode ser vazia e '
      + 'precisa apresentar formato de texto.',
    });
  }

  next();
};

module.exports = {
  userIdValidatorForPost,
  userNameValidatorForPost,
  mailValidatorForPost,
  passwordValidatorForPost,
  userNameValidatorForPut,
  passwordValidatorForPut,
  cpfValidatorForPut,
  cellphoneValidatorForPut,
  userPictureValidatorForPut,
  cepValidatorForPutOrPost,
  userAddressIdValidatorForPut,
  productIdValidator,
  productTitleValidatorForPost,
  productDescriptionForPost,
  productAcceptChangeForPost,
  productPriceForPost,
  productTypeIdForPost,
  productConditionIdForPost,
  productStreetValidatorForPost,
  productNeighborhoodValidatorForPost,
  productCityValidatorForPost,
  productUfValidatorForPost,
  productDDDValidatorForPost,
  fileNameValidatorForDelete,
};