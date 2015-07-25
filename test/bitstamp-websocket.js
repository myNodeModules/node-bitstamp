var assert = require('assert');
var bitstamp = require('../dist/bitstamp-api.js');
var client = new bitstamp();

describe('Websockets tests', function () {
	describe('LiveFullOrderBook channel', function () {
		it('should trigger channel with the good keys', function () {
			client.webSockets(client.liveFullOrderBook, function (data) {
				assert.deepEqual(["timestamp", "bids", "asks"], Object.keys(data));
			});
		});
		it('should trigger channel almost in time', function () {
			client.webSockets(client.liveFullOrderBook, function (data) {
				assert.equal(Math.round(Date.now() / 10000), Math.round(data.timestamp / 10));
			});
		});
	});
	describe('LiveOrderBook channel', function () {
		it('should trigger channel with the good keys', function () {
			client.webSockets(client.liveFullOrderBook, function (data) {
				assert.deepEqual(["bids", "asks"], Object.keys(data));
			});
		});
		it('should trigger channel with the good number of elements', function () {
			client.webSockets(client.liveFullOrderBook, function (data) {
				assert.equal(20, data.asks.length());
				assert.equal(20, data.bids.length());
			});
		});
	});

});
