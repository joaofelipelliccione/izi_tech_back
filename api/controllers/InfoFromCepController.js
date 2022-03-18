const InfoFromCepService = require('../services/InfoFromCepService');

const create = async (req, _res, next) => {
  const { cep, street, neighborhood, city, uf, ddd } = req.body;

  if (cep === null) {
    req.infoFromCepId = null;
    return next();
  }

  const existentCep = await InfoFromCepService.findOne(cep);
  if (!existentCep.error) {
    req.infoFromCepId = existentCep.infoFromCepId;
    return next();
  }

  const newInfoFromCep = await InfoFromCepService
  .create({ cep, street, neighborhood, city, uf, ddd });
  req.infoFromCepId = newInfoFromCep.infoFromCepId;
  return next();
};

module.exports = {
  create,
};