var Bitstamp = require('../dist/bitstamp-api.js');

Bitstamp.httpRequest('ticker').then(function (data) {
	console.log('-------- ticker channel ---------');
	console.log(data);
});

Bitstamp.httpRequest('ticker_hour').then(function (data) {
	console.log('------ ticker_hour channel ------');
	console.log(data);
});
/*
Bitstamp.httpRequest('order_book').then(function (data) {
	console.log('------ order_book channel -------');
	console.log(data);
});

Bitstamp.httpRequest('transactions').then(function (data) {
	console.log('----- transactions channel ------');
	console.log(data);
});
*/
Bitstamp.httpRequest('eur_usd').then(function (data) {
	console.log('------- eur_usd channel ---------');
	console.log(data);
});
