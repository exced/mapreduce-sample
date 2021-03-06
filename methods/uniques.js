var mongoose = require('mongoose');
config = require('../config/database');
var View = require('../models/view');

/* keep only the unique var in tab */
// usage example:
// var a = ['a', 1, 'a', 2, '1'];
// var unique = a.filter( onlyUnique ); // returns ['a', 1, 2, '1']
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

/* mongoDB connection */
mongoose.connect(config.database);

mongoose.connection.on('open', function (err) {
    if (err) throw err;
});

/*
* count the occurence of an URL with mapReduce
*/
var o = {};
o.map = function () {
    emit({ url: this.url, hour: this.hour }, this.user_id);
};
o.reduce = function (k, vals) {
    return {visitors: vals.filter(onlyUnique)};
};
o.scope = { onlyUnique: new mongoose.mongo.Code(onlyUnique.toString()) }
View.mapReduce(o, function (err, results) {
    if (err) throw err;
    console.log(JSON.stringify(results));
});

mongoose.connection.close();
