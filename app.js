var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

// configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use middleware
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'bower_components')));

app.use(require('./todos'));

var port = process.argv[2] || process.env.PORT || 3000;

app.listen(Number(port), function(){
  console.log("Listening at port " + port);
});