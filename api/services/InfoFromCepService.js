const { StatusCodes } = require('http-status-codes');
const {
  InfoFromCep,
} = require('../../models/index');

const findOne = async (cep) => {
  const info = await InfoFromCep.findOne({
    where: { cep } });

  if (info === null) {
    return {
      error: {
        code: StatusCodes.NOT_FOUND,
        message: 'CEP não encontrado.',
      },
    };
  }

  return { infoFromCepId: info.infoFromCepId };
};

const create = async ({ cep, street, neighborhood, city, uf, ddd }) => {
  const newInfoFromCep = await InfoFromCep.create({ cep, street, neighborhood, city, uf, ddd });
  return {
    code: StatusCodes.CREATED,
    infoFromCepId: newInfoFromCep.infoFromCepId,
  };
};

module.exports = {
  findOne,
  create,
};