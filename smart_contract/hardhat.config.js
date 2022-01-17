// https://eth-ropsten.alchemyapi.io/v2/bpqFIV7QzMFjkkSoUlfQFuQUqoYZ73I0

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/bpqFIV7QzMFjkkSoUlfQFuQUqoYZ73I0',
      accounts: ['fe893a4b765a9fba61374171c52d578ff4794d063f25cbca0e483090417ab30f'],
    },
  },
};