var Bitstamp = require('../dist/bitstamp-api.js');

var getValues = function (data) {
	console.log(data.bids.map(function (value) { return value[0]; }).concat(data.asks.map(function (value) { return value[0]; })));
}

Bitstamp.webSocketRequest('order_book').then(console.log);

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
