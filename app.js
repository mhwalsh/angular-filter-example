var express = require('express');
var indexRouter = require('./routes/index');

var app = express();

// middleware
app.use(express.static('public'));

// routers
app.use('/', indexRouter);

// server port set and listen
var serverPort = process.env.port || 3000;
app.set('port', serverPort);

var server = app.listen(serverPort, function() {
  console.log('up and listening on', server.address().port);
});
