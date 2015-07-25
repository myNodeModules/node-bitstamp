var Bitstamp = require('../dist/bitstamp-api.js');
var client = new Bitstamp();

client.webSockets(client.liveOrderBook, console.log);

function printData (data) {
	console.log('--------asks---------');
	console.log(data.bids);
	console.log('---------------------');
	console.log('--------bids---------');
	console.log(data.bids);
	console.log('---------------------');
}
