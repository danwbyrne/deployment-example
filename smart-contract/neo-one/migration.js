const BigNumber = require('bignumber.js');

module.exports = ({ token, ico, escrow }, _network) => {
  token.deploy();
  ico.deploy(undefined, new BigNumber(1566864121), undefined);
  escrow.deploy();
};
