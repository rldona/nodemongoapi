var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var app        = express();

mongoose.connect('mongodb://localhost/products');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

var engineers = require('./routes/products.routes')(app);

var server = app.listen(3301, function() {
  console.log('Products server running at localhost --> 3301');
});
