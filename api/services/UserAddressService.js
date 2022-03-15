const { StatusCodes } = require('http-status-codes');
const {
  UserAddress,
} = require('../../models/index');

const create = async () => {
  const newAddress = await UserAddress.create();
  return {
    code: StatusCodes.CREATED,
    userAddressId: newAddress.userAddressId,
  };
};

const update = async ({ userAddressId, complement, infoFromCepId }) => {
  await UserAddress.update(
    { complement, infoFromCepId },
    { where: { userAddressId } }, 
  );

  return {
    code: StatusCodes.OK,
    userAddress: { userAddressId, complement, infoFromCepId },
  };
};

module.exports = {
  create,
  update,
};