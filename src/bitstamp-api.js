let Pusher = require('pusher-client')
, date = Date.now()
, request = require('request');

let Bitstamp = function () {
};

Bitstamp.prototype.webSocketRequest = function (channel, callback) {
	if (!callback) {
		channel = callback;
		callback = undefined;
	}
	channel(callback);
};

Bitstamp.prototype.httpRequest = function (channel, callback) {
	if (!callback) {
		channel = callback;
		callback = undefined;
	}
	var url = 'http://www.bitstamp.net/api/' + channel + '/';

	request(url, function (err, response, body) {
		callback(body);
	});
}

Bitstamp.prototype.liveTicker = function liveTicker (fc) {
	let pusherClient = new Pusher('de504dc5763aeef9ff52')
	let live_trades = pusherClient.subscribe('live_trades')
	pusherClient.bind('trade', data => {
		fc(data);
	});
};

Bitstamp.prototype.liveOrderBook = function liveOrderBook (fc) {
	let pusherClient = new Pusher('de504dc5763aeef9ff52')
	let order_book = pusherClient.subscribe('order_book')
	pusherClient.bind('data', data => {
		fc(data);
	});
};

Bitstamp.prototype.liveFullOrderBook = function liveFullOrderBook (fc) {
	let pusherClient = new Pusher('de504dc5763aeef9ff52')
	let diff_order_book = pusherClient.subscribe('diff_order_book')
	pusherClient.bind('data', data => {
		fc(data);
	});
};

module.exports = Bitstamp;
