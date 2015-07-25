var Pusher = require('pusher-client');
var trades = new Pusher('de504dc5763aeef9ff52');
var full_book = new Pusher('de504dc5763aeef9ff52');

var live_trades = trades.subscribe('live_trades');
var order_book = trades.subscribe('order_book');
var diff_order_book = full_book.subscribe('diff_order_book');

trades.bind('trade',
  function(data) {
    console.log("-----> Live Trades <-----");
    console.log(Math.floor(new Date() / 1000));
    console.log(data);
    console.log("------------------------");
  }
);

trades.bind('data',
  function(data) {
    console.log("-----> Order Book <-----");
    console.log(Math.floor(new Date() / 1000));
    console.log(data.asks);
    console.log(data.bids);
    console.log("------------------------");
  }
);


full_book.bind('data',
  function(data) {
    console.log("-----> Full Order Book<-----");
    console.log(Math.floor(new Date() / 1000));
    console.log(data.asks);
    console.log(data.bids);
    console.log("---------------------------");
  }

);
