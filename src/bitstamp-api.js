let Pusher = require('pusher-client')
, request = require('request')
, Readable = require('stream').Readable;

export function webSocketStream (channel, callback) {
}

export function webSocketRequest (channel) {
	let pusherClient = new Pusher('de504dc5763aeef9ff52');
	let live_trades = pusherClient.subscribe(channel);
	return new Promise((resolve, reject) => resolve(getSocket(pusherClient))).then(getSocket(pusherClient));
};

export function httpRequest (channel) {
	let url = 'http://www.bitstamp.net/api/' + channel + '/';
	return new Promise((resolve, reject) => {
		request(url, (err, response, body) => (resolve(body)));
	});
}
