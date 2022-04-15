const sdk = require('api')('@opensea/v1.0#bg4ikl1mk428b');
const opensea = require('../config/opensea.config');

const jobOpensea = sdk['retrieving-a-single-contract']({
  asset_contract_address: '0x11450058d796b02eb53e65374be59cff65d3fe7f',
  'X-API-KEY': opensea.API_KEY
})
  .then(res => console.log(res))
  .catch(err => console.error(err));

module.exports = jobOpensea;
