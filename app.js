var mongoose = require('mongoose');
config = require('./config/database');
var View = require('./models/view');


function randomIntInc (low, high) {
	return Math.floor(Math.random() * (high - low + 1) + low);
}

/* mongoDB connection */
mongoose.connect(config.database);

mongoose.connection.on('open', function(){
    console.log('Mongo is connected');

    /* drop view collection for this example */
	View.remove({}, function(err) { 
   		console.log('View collection removed') 
	});    
    /* inserting some random datas ... */
    urls = [
    	"/",
    	"/edmond",
    	"/ksander",
    	"/basile",
    	"/ulrich",
    	"/schaal",
    	"/theo"
    ];
    for (var i = 0; i < 100; i++) {
	    var view = View({
	    	url: urls[randomIntInc(0, urls.length-1)],
	    	user_id: randomIntInc(0, 10)
	    });
	    view.save(function(err, newView){
	    	if (err) throw err;
	    });
	}

	/*
	* count the occurence of an URL with mapReduce
	*/
	var o = {};
	o.map = function () {
		emit([this.url, this._id.getTimestamp()], 1)
	}
	o.reduce = function (k, vals) {
		return vals.length
	}
	View.mapReduce(o, function (err, results) {
		if(err) throw err;
		console.log(results)
	})	

});
