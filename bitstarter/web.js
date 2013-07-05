var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('hello World 3!');
  var buffer = new Buffer(16);
  buffer.write("Hello World!", "utf-8");
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
