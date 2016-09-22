var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var viewSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    user_id: {
        type: Number,
        required: true
    }/*, // useless -> use _id.getTimestamp() instead
    hour: {
        type: Date,
        default: Date.now
    }*/
});

module.exports = mongoose.model('View', viewSchema);