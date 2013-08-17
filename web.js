var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());

app.get('/', function(request, response) {
  response.send("lk");
});

var port = process.env.port || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
