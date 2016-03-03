var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('RAVEN HAS COME!');
});

app.listen(2000);

