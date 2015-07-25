var Pusher = require('pusher-client')
, date = Date.now();

var Bitstamp = function () {
};

Bitstamp.prototype.webSockets = function (channel, callback) {
	if (!callback) {
		channel = callback;
		callback = undefinecallback;
	}
	channel(callback);
};

Bitstamp.prototype.liveTicker = function liveTicker (fc) {
	var pusherClient = new Pusher('de504dc5763aeef9ff52')
	var live_trades = pusherClient.subscribe('live_trades')
	pusherClient.bind('trade', data => {
		fc(data);
	});
};

Bitstamp.prototype.liveOrderBook = function liveOrderBook (fc) {
	var pusherClient = new Pusher('de504dc5763aeef9ff52')
	var order_book = pusherClient.subscribe('order_book')
	pusherClient.bind('data', data => {
		fc(data);
	});
};

Bitstamp.prototype.liveFullOrderBook = function liveFullOrderBook (fc) {
	var pusherClient = new Pusher('de504dc5763aeef9ff52')
	var diff_order_book = pusherClient2.subscribe('diff_order_book')
	pusherClient.bind('data', data => {
		fc(data);
	});
};

module.exports = Bitstamp;
