const router = require('express').Router()
var Promise = require('bluebird');
var db = require('../models');
var Place = db.models.place;
var Hotel = db.models.hotel;
var Restaurant = db.models.restaurant;
var Activity = db.models.activity;

router.get('/', function(req, res, next){
	// Hotel.findAll()
	// // .then(function(hotels){
	// // 	console.log(hotels);
	// // 	res.render('index', {hotels: hotels});
	// // }).catch(next);


	Promise.all([Hotel.findAll(), Restaurant.findAll(), Activity.findAll()])
	.then(function(results){
		res.render('index', {hotels: results[0], restaurants: results[1], activities: results[2]});
	});


	// res.render('index');




})



module.exports = router
