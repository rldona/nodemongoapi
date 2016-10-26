var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var app        = express();

mongoose.connect('mongodb://localhost/engineers');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

var engineers = require('../routes/engineers.routes')(app);

var server = app.listen(3300, function() {
  console.log('Server running at localhost : 3300');
});
