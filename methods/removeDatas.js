var mongoose = require('mongoose');
config = require('../config/database');
var View = require('../models/view');

/* mongoDB connection */
mongoose.connect(config.database);

mongoose.connection.on('open', function (err) {
    if (err) throw err;
});

/* drop view collection for this exercize */
View.remove({}, function (err) {
    console.log('View collection removed')
});

mongoose.connection.close();