var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var viewSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }, // useless -> use _id.getTimestamp() instead
    hour: {
        type: String,
        default: true
    }
});

module.exports = mongoose.model('View', viewSchema);