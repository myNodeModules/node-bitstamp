var Bitstamp = require('../dist/bitstamp-api.js');
var client = new Bitstamp();

client.webSockets(client.liveFullOrderBook, printData);

function printData (data) {
	console.log('------timestamp------');
	console.log(data.timestamp);
	console.log('---------------------');
	console.log('--------asks---------');
	console.log(data.bids);
	console.log('---------------------');
	console.log('--------bids---------');
	console.log(data.bids);
	console.log('---------------------');
}
