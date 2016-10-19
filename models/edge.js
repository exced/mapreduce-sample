var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var edgeSchema = new Schema({  
  id: {
      type: String,
      required: true
  },
  source: {
    id: {
        type: String,
        required: true
    },
    weight: Number,
    required: true
  },
  target: {
    id: {
        type: String,
        required: true
    },
    weight: Number,
    required: true
  }
});

module.exports = mongoose.model('Edge', edgeSchema);