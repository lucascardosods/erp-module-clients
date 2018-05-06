let mongoose = require('mongoose');

let Client = mongoose.Schema({
  name: {type: String},
  city: {type: String},
  birth: {type: String},
  phone: {type: String},
  creationDate: {type: Date, default: new Date()}
});

module.exports = mongoose.model('Client', Client);

