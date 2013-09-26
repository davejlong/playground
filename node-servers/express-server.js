var express = require('express'),
    util = require('util');

var app = express();

app.get('/hello', function (req, res) {
  res.type('text');
  res.send('Hello, World');
});

app.get('/pixel', function (req, res) {
  res.type('gif');
  res.send("\x47\x49\x46\x38\x39\x61\x01\x00\x01\x00\xf0\x01\x00\xff\xff\xff\x00\x00\x00\x21\xf9\x04\x01\x0a\x00\x00\x00\x2c\x00\x00\x00\x00\x01\x00\x01\x00\x00\x02\x02\x44\x01\x00\x3b");
});

app.listen(1337);
util.log('Server running at http://127.0.0.1:1337');
