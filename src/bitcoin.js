const fetchData = require('../utils/fetchData');

const API = 'https://api.coindesk.com/v1/bpi/currentprice.json';

async function getBitcoinPrice() {
    try {
        const dataResponse =  await fetchData(API);
        console.log('Precio fecha: ' + dataResponse.time.updated);
        console.log('Moneda: ' + dataResponse.chartName);
        console.log('-----------------------');
        console.log('Precio ' + dataResponse.bpi.USD.code  + ': ' + dataResponse.bpi.USD.rate);
        console.log('Precio ' + dataResponse.bpi.EUR.code  + ': ' + dataResponse.bpi.EUR.rate);
        console.log('Precio ' + dataResponse.bpi.GBP.code  + ': ' + dataResponse.bpi.GBP.rate);
        console.log('-----------------------');
        // console.log('Precio: ' + dataResponse.bpi.USD.rate);
    } catch (error) {
        console.log('Un error ha ocurrido:' + error);
    }
}
// getBitcoinPrice();
module.exports = { getBitcoinPrice };