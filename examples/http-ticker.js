var Bitstamp = require('../dist/bitstamp-api.js');
var client = new Bitstamp();

//console.log('-------- ticker channel ---------');
client.http('ticker', console.log);
//console.log('---------------------------------');

//console.log('------ ticker_hour channel ------');
client.http('ticker_hour', console.log);
//console.log('---------------------------------');

//console.log('------ order_book channel -------');
//client.http('order_book', console.log);
//console.log('---------------------------------');

//console.log('----- transactions channel ------');
//client.http('transactions', console.log);
//console.log('---------------------------------');

//console.log('------- eur_usd channel ---------');
client.http('eur_usd', console.log);
//console.log('---------------------------------');

function printData (data) {
//	console.log(data.bids);
//	console.log('--------bids---------');
//	console.log(data.bids);
//	console.log('---------------------');
}
