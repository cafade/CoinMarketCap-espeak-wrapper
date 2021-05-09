#!/usr/bin/env node


const rp = require('request-promise');
const requestOptions = {
      method: 'GET',
      uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=ETH',
      qs: {
              'convert': 'USD'
            },
      headers: {
              'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY
            },
      json: true,
      gzip: true
};

rp(requestOptions).then(response => {
      // phonetic approximation
      var ethData = response['data']['ETH']['quote']
      console.log(`Precio actual del eterium: ${ethData['USD'].price | 0} dólares`);
      console.log('.....Repito.....')
      console.log(`${ethData['USD'].price | 0} dólares`);
}).catch((err) => {
      console.log('Error obteniendo la información')
});
