const UserAddressService = require('../services/UserAddressService');

const update = async (req, _res, next) => {
  const { userAddressId, complement } = req.body;
  const { infoFromCepId } = req;

  if (infoFromCepId === null) {
    return next();
  }

  await UserAddressService.update({ userAddressId, complement, infoFromCepId });
  next();
};

module.exports = {
  update,
};