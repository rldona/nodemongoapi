var mongoose = require('mongoose');

var engineerSchema = mongoose.Schema({
  name: String,
  age: Number,
  specialty: String
});

module.exports = mongoose.model('Engineer', engineerSchema);