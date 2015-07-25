var Bitstamp = require('../dist/bitstamp-api.js');
var client = new Bitstamp();

client.webSockets(client.liveTicker, console.log);

function printData (data) {
//	console.log(data.bids);
//	console.log('--------bids---------');
//	console.log(data.bids);
//	console.log('---------------------');
}
