'use strict';

var path = process.cwd();
var MongoClient = require('mongodb').MongoClient;
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' }).single('image', 4);

module.exports = function (app) {
    
    app.route('/')
		.get(function (req, res) {
			res.render(path + '/public/index');
		});
		
	app.route('/api/fileanalyse')
	    .post( function (req, res){
	        upload(req, res, function (err) {
	            if (err) console.log(err);
	            console.log(req.file);
    	        res.json(req.file);
	        });
    	        
	    });
		
};