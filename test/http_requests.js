var assert = require('assert');
var bitstamp = require('../dist/bitstamp-api.js');

describe('HTTP requests tests', function () {
	describe('ticker channel', function () {
		it('should trigger channel with the good keys', function (done) {
			bitstamp.httpRequest('ticker', function (data) {
				assert.deepEqual(["high", "last", "timestamp", "bid", "vwap", "volume", "low", "ask"], Object.keys(JSON.parse(data)));
				done();
			});
		});
	});
	describe('ticker_hour channel', function () {
		it('should trigger channel with the good keys', function (done) {
			bitstamp.httpRequest('ticker_hour', function (data) {
				assert.deepEqual(["high", "last", "timestamp", "bid", "vwap", "volume", "low", "ask"], Object.keys(JSON.parse(data)));
				done();
			});
		});
	});
	describe('order_book channel', function () {
		it('should trigger channel with the good keys', function (done) {
			bitstamp.httpRequest('order_book', function (data) {
				assert.deepEqual(["timestamp", "bids", "asks"], Object.keys(JSON.parse(data)));
				done();
			});
		});
	});
	describe('transactions channel', function () {
		it('should trigger channel with the good keys', function (done) {
			bitstamp.httpRequest('transactions', function (data) {
				assert.deepEqual(["date", "tid", "price", "type", "amount"], Object.keys(JSON.parse(data)[0]));
				done();
			});
		});
	});
	describe('eur_usd channel', function () {
		it('should trigger channel with the good keys', function (done) {
			bitstamp.httpRequest('eur_usd', function (data) {
				assert.deepEqual(["sell", "buy"], Object.keys(JSON.parse(data)));
				done();
			});
		});
	});
});
