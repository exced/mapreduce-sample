var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vertexSchema = new Schema({  
  id: {
      type: String,
      required: true
  },
  color: String,
  label: String
});

module.exports = mongoose.model('Vertex', vertexSchema);