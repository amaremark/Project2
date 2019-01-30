var express = require('express');
var router = express.Router();

var User = require('../schema/user')
var Response = require('../schema/response')
//GET HOME PAGE
router.get('/', function(req,res){
	User.find({role: {$ne: 1}}, function(err, users){
		if(err) { console.log(err);
	} else {
      res.render('users',{successMsg: req.flash(seccessMsg), errorMsg: req.flash(errorMsg)})
	}
	})
})

// access the regiter page

router.get('/register', function (req, res){
	res.render('register',{title: 'Register'});
})

//Register users
router.post('/register', function(req, res){
	var data = new User(req.body);
	data.save(function(err){
		if(err){
		res.render('register',{message:'Invalid try agin'})
		}else{
			res.render('register',{message: 'User registerd sucessfuly!'});
		}
	})
})
// user by id

router.get('/edit/:id', function(req, res){
	User.findById(req.params.id, function(err, user){
		if(err){
			console.log(err);
		}else{
			res.render('edit-user',{errorMsg: req.flash('errorMsg'),successMsg: req.flash('successMsg')})
		}
	})
})

router.post('/edit/:id',function(req, res){
	User.findByIdAndUpdate(req.params.id, req.body, function(err){
		if(err){
			req.flash('errorMsg', 'something went wrong User could not update.');
			req.redirect('users/edit/'+req.params.id);
		}else{
			req.flash('seccessMsg', 'User updated successfuly.')
			res.redirect('users/edit/'+req.params.id)
		}
	})
})

router.get('/distroy/:id', function(req, res){
	User.findByIdAndRemove(req.params.id, function(err, project){
		if(err){
			req.flash('errorMsg', 'user not deleted successfuly.');
			req.redirect('/users');
		}
	})
})
module.exports = router;
// /* READ, UPDATE, DELETE users */
// router.get('/', function(req, res) {
// 	// Get the only one db instance in our app
// 	var db = req.db;
// 	// Fetch from 'users' collection
// 	var userCollection = db.get("users");
// 	userCollection.find({}, {}, function(e, docs) {
// 		res.render('user-list', {'userlist' : docs});
// 	});
// });

// /* NEW user */
// router.get('/new', function(req, res) {
// 	res.render('user-new');
// });

// /* INSERT user */
// router.post('/insert_user', function(req, res) {
// 	// Get the only one db instance in our app
// 	var db = req.db;

// 	// Get POST values, It's easy
// 	var userName = req.body.name;
// 	var userEmail = req.body.email;
// 	console.log('POST VALUES: ' + userName + ' ' + userEmail);
	
// 	// Fetch from 'users' collection
// 	var userCollection = db.get("users");
// 	userCollection.insert({
// 		'username' : userName,
// 		'email' : userEmail
// 	}, function(err, doc) {
// 		if(err) res.send('Problem occured when inserting in users collection');
// 		else {
// 			console.log("Inserted");
// 			res.location('users');
// 			res.redirect('/users');
// 		}
// 	});
// });

// module.exports = router;