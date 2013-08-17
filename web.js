var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());

app.get('/', function(request, response) {
  var buf = fs.readFileSync('index.html');
  var page = buf.toString('utf-8');
  response.send(page);
});

var port = process.env.port || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
