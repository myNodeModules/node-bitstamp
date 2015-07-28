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

module.exports = Bitstamp;
