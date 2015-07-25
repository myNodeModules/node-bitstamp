var Bitstamp = require('../dist/bitstamp-api.js');
var client = new Bitstamp();

client.webSockets(client.liveFullOrderBook, printData);

function printData (data) {
	console.log('------timestamp------');
	console.log('timestamp: ' + data.timestamp);
	console.log('local: ' + Math.round(Date.now() / 1000));
	console.log('---------------------');
	console.log('--------asks---------');
	console.log(data.bids);
	console.log('---------------------');
	console.log('--------bids---------');
	console.log(data.bids);
	console.log('---------------------');
}
