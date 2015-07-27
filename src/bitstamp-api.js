var Pusher = require('pusher-client')
, date = Date.now()
, request = require('request')
, Readable = require('stream').Readable;

let Bitstamp = function () {
};

Bitstamp.prototype.webSocketRequest = function (channel) {
	let pusherClient = new Pusher('de504dc5763aeef9ff52');
	let live_trades = pusherClient.subscribe(channel);
	let readStream = new Readable({ objectMode: true });
	readStream._read = function() {
	};
	pusherClient.bind('data', data => {
		readStream.push(data);
	});
	return readStream;
};

Bitstamp.prototype.httpRequest = function (channel, callback) {
	var url = 'http://www.bitstamp.net/api/' + channel + '/';

	request(url, function (err, response, body) {
		callback(body);
	});
}

Bitstamp.prototype.liveTicker = function liveTicker (fc) {
	let pusherClient = new Pusher('de504dc5763aeef9ff52')
	let live_trades = pusherClient.subscribe('live_trades')
	let streamedData;
	pusherClient.bind('trade', data => {
		streamData = data;
	});
	return streamData(streamedData);
};

Bitstamp.prototype.liveOrderBook = function liveOrderBook () {
	let pusherClient = new Pusher('de504dc5763aeef9ff52')
	let order_book = pusherClient.subscribe('order_book')
	let streamedData
};

Bitstamp.prototype.liveFullOrderBook = function liveFullOrderBook (fc) {
	let pusherClient = new Pusher('de504dc5763aeef9ff52')
	let diff_order_book = pusherClient.subscribe('diff_order_book')
	pusherClient.bind('data', data => {
		fc(data);
	});
};

let streamData = function (data) {
	let readStream = new Readable({ objectMode: true });
	return readStream.push(data);
}

module.exports = Bitstamp;
