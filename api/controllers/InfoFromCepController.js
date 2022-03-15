const InfoFromCepService = require('../services/InfoFromCepService');

const create = async (req, _res, next) => {
  const { cep, street, neighborhood, city, uf, ddd } = req.body;

  const existentCep = await InfoFromCepService.findOne(cep);
  if (!existentCep.error) {
    req.infoFromCepId = existentCep.infoFromCepId;
    next();
  }

  if (existentCep.error) {
    const newInfoFromCep = await InfoFromCepService
    .create({ cep, street, neighborhood, city, uf, ddd });
    req.infoFromCepId = newInfoFromCep.infoFromCepId;
    next();
  }
};

module.exports = {
  create,
};