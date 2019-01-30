
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var session = require('express-session');
var flash = require('req-flash');

 var app = express();

 var mongoose = require('mongoose')
 mongoose.Promise = global.Promise
 mongoose.connect('mongodb://localhost/user_crud', {useMongoClient: true})
 .then(()=> console.log('conected successfuly'))
 .catch((err)=> console.log(err))


// views engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
    secret: 'jdkakcjjjdajkcjsacnljclajacjhs',
    resave: false,
    saveUninitialized: true
}))
app.use(flash())

app.use('/', index)
app.use('/users', users)

app.use(function(req, res, next){
    var err = new err('not found')
    err.status = 404
    next(err)
})

app.use(function(req, res, next){

})





// var hbs = require('hbs');
// var fs = require('fs');

// var mongo = require('mongodb');
// var monk = require('monk');
// var db = monk('localhost:27017/tutorialdb');

// hbs.registerPartials(__dirname + '/views/partials');

// // set the view engine to use handlebars
// app.set('view engine', 'hbs');
// app.set('views', __dirname + '/views');

// // uncomment after placing your favicon in /public
// //app.use(favicon(__dirname + '/public/favicon.ico'));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// // Make our db accessible to our router
// app.use(function(req,res,next){
//     req.db = db;
//     next();
// });

// app.use('/', routes);
// app.use('/users', users);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// // error handlers

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//     app.use(function(err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });


// module.exports = app;