var assert = require('assert');
var bitstamp = require('../dist/bitstamp-api.js');
var client = new bitstamp();

describe('Websockets tests', function () {
	describe('LiveFullOrderBook channel', function () {
		this.timeout(10000);
		it('should trigger channel with the good keys', function (done) {
			var isDone = 1;
			client.webSocketRequest(client.liveFullOrderBook, function (data) {
				assert.deepEqual(["timestamp", "bids", "asks"], Object.keys(data));
				if (isDone > 0)
					done();
				isDone--;
			});
		});
		it('should trigger channel almost in time', function (done) {
			var isDone = 1;
			client.webSocketRequest(client.liveFullOrderBook, function (data) {
				return done(assert.equal(Math.round(Date.now() / 100000), Math.round(data.timestamp / 100)));
				if (isDone > 0)
					done();
				isDone--;
			});
		});
	});
	describe('LiveOrderBook channel', function () {
		it('should trigger channel with the good keys', function (done) {
			client.webSocketRequest(client.liveFullOrderBook, function (data) {
				done(assert.deepEqual(["timestamp", "bids", "asks"], Object.keys(data)));
			});
		});
		it('should trigger channel with the good number of elements', function (done) {
			client.webSocketRequest(client.liveFullOrderBook, function (data) {
				assert.equal(20, (data.asks.length()));
				done(assert.equal(data.bids.length()));
			});
		});
	});

});
