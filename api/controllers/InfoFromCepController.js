const { StatusCodes } = require('http-status-codes');
const InfoFromCepService = require('../services/InfoFromCepService');

const create = async (req, res, _next) => {
  const { cep, street, neighborhood, city, uf, ddd } = req.body;

  const existentCep = await InfoFromCepService.findOne(cep);
  if (!existentCep.error) {
    return res.status(StatusCodes.CONFLICT)
    .json({ code: StatusCodes.CONFLICT, infoFromCepId: existentCep.infoFromCepId });
  }

  const newInfoFromCep = await InfoFromCepService
    .create({ cep, street, neighborhood, city, uf, ddd });
  return res.status(newInfoFromCep.code).json({
    code: newInfoFromCep.code,
    infoFromCepId: newInfoFromCep.infoFromCepId,
  });
};

module.exports = {
  create,
};