var Readable = require('stream').Readable;
var Pusher = require('pusher-client')
, date = Date.now();

var Bitstamp = function () {
};

Bitstamp.prototype.webSockets = function (channel) {
	return channel();
};

Bitstamp.prototype.liveTicker = function liveTicker () {
	var pusherClient = new Pusher('de504dc5763aeef9ff52')
	var live_trades = pusherClient.subscribe('live_trades')
	pusherClient.bind('trade', data => {
		fc(data);
	});
};

Bitstamp.prototype.liveOrderBook = function liveOrderBook () {
	var pusherClient = new Pusher('de504dc5763aeef9ff52')
	var order_book = pusherClient.subscribe('order_book')
	var readStream = new Readable({ objectMode: true });
	readStream.curData = [];
	readStream._read = function() {
		if (this.curData.length > 0) {
			console.log('read');
			this.push(this.curData[0]);
			this.curData = this.curData.slice(1);
		}
		else {
			return null;
		}
	};
	pusherClient.bind('data', data => {
		readStream.push(data);
	});
	return readStream;
};

Bitstamp.prototype.liveFullOrderBook = function liveFullOrderBook (fc) {
	var pusherClient = new Pusher('de504dc5763aeef9ff52')
	var diff_order_book = pusherClient.subscribe('diff_order_book')
	pusherClient.bind('data', data => {
		fc(data);
	});
};

module.exports = Bitstamp;
