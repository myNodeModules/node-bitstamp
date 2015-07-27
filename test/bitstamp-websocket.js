var assert = require('assert');
var bitstamp = require('../dist/bitstamp-api.js');
var client = new bitstamp();

describe('Websockets tests', function () {
	describe('live_order_book channel', function () {
		this.timeout(10000);
		it('should trigger channel with the good keys', function (done) {
			client.webSocketRequest('order_book').once('data', function (data) {
				assert.deepEqual(["bids", "asks"], Object.keys(data));
				done();
			});
		});
	});
	describe('live_diff_order_book channel', function () {
		it('should trigger channel with the good keys', function () {
			client.webSocketRequest('diff_order_book', function (data) {
				assert.deepEqual(["bids", "asks"], Object.keys(data));
			});
		});
		it('should trigger channel with the good number of elements', function () {
			client.webSocketRequest('diff_order_book', function (data) {
				assert.equal(20, data.asks.length());
				assert.equal(20, data.bids.length());
			});
		});
	});

});
