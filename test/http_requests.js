var assert = require('assert');
var bitstamp = require('../dist/bitstamp-api.js');
var client = new bitstamp();

describe('HTTP requests tests', function () {
	describe('ticker channel', function () {
		it('should trigger channel with the good keys', function (done) {
			client.httpRequest('ticker', function (data) {
				assert.deepEqual(["high", "last", "timestamp", "bid", "vwap", "volume", "low", "ask"], Object.keys(JSON.parse(data)));
				done();
			});
		});
	});
	describe('ticker_hour channel', function () {
		it('should trigger channel with the good keys', function (done) {
			client.httpRequest('ticker_hour', function (data) {
				assert.deepEqual(["high", "last", "timestamp", "bid", "vwap", "volume", "low", "ask"], Object.keys(JSON.parse(data)));
				done();
			});
		});
	});
	describe('order_book channel', function () {
		it('should trigger channel with the good keys', function (done) {
			client.httpRequest('order_book', function (data) {
				assert.deepEqual(["timestamp", "bids", "asks"], Object.keys(JSON.parse(data)));
				done();
			});
		});
	});
	describe('transactions channel', function () {
		it('should trigger channel with the good keys', function (done) {
			client.httpRequest('transactions', function (data) {
				assert.deepEqual(["date", "tid", "price", "amount", "type"], Object.keys(JSON.parse(data)));
			});
		});
	});
	describe('eur_usd channel', function () {
		it('should trigger channel with the good keys', function (done) {
			client.httpRequest('eur_usd', function (data) {
				assert.equal(["blabla", "usd"], Object.keys(JSON.parse(data)));
				done();
			});
		});
	});
});
