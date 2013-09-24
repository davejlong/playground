var http = require('http'),
    url = require('url');


var router = function (req, res) {
  var u = url.parse(req.url, true),
      headers = [];
  if (u.pathname.match(/hello/)) {
    headers.push([ 'Content-Type', 'text/plain' ]);
    res.writeHead(200, headers);
    res.end('Hello, World');
  } else if (u.pathname.match(/pixel/)) {
    headers.push([ 'Content-Type', 'image/gif' ]);
    res.writeHead(200, headers);
    res.end(
      "\x47\x49\x46\x38\x39\x61\x01\x00\x01\x00\xf0\x01\x00\xff\xff\xff\x00\x00\x00\x21\xf9\x04\x01\x0a\x00\x00\x00\x2c\x00\x00\x00\x00\x01\x00\x01\x00\x00\x02\x02\x44\x01\x00\x3b",
      'binary'
    );
  } else {
    headers.push([ 'Content-Type', 'text/plain' ]);
    res.writeHead(404, headers);
    res.end('Route not found');
  }
};


http.createServer(router).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337');
