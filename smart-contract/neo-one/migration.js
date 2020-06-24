const BigNumber = require('bignumber.js');

module.exports = ({ token, ico, escrow }, _network) => {
    ico.deploy(undefined, new BigNumber(1566864121), undefined);
    token.deploy();
    escrow.deploy();
};