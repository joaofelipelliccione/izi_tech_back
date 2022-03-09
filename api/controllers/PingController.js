const { StatusCodes } = require('http-status-codes');

module.exports = async (_req, res) => {
  res.status(StatusCodes.OK).json({
    code: StatusCodes.OK,
    message: 'tech!',
  });
};
