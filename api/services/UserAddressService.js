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

module.exports = {
  create,
};