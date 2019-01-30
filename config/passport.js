const LocalStrategy = require('passport-local').Strategy
const Newtask = require('../models/Newtask')

module.exports = function(passport) {

  passport.serializeUser(function(tasks, callback) {
    callback(null, tasks.id)
  })

  passport.deserializeUser(function(id, callback) {
    Newtask.findById(id, function(err, tasks) {
      callback(err, tasks)
    })
  })

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function(req, email, password, callback){
    Newtask.findOne({'local.email': email}, function(err, tasks) {
      if (err) return callback(err)

      if (tasks) {
        return callback(null, false, req.flash('signupMessage', 'Hey buddy, the email is already taken!!'))
      } else {
        let newUser = new Newtask()
        newUser.local.email = email
        newUser.local.password = newUser.encrypt(password)

        newUser.save(function(err) {
          if (err) throw err
          return callback(null, newUser)
        })
      }
    })
  }))
  
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function(req, email, password, callback) {
    Newtask.findOne({'local.email': email}, function(err, tasks) {
      if (err) return callback(err)

      if (!tasks) {
        return callback(null, false, req.flash('loginMessage', 'No tasks found'))
      }
      if (!tasks.validPassword(password)) {
        return callback(null, false, req.flash('loginMessage', 'Ooops, wrong password'))
      }
      return callback(null, tasks)
    })
  }))
}