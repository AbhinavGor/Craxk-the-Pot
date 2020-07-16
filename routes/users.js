const express = require('express');
const router = express.Router();
const passport = require('passport');
const { forwardAuthenticated, ensureAuthenticated } = require('../config/auth');

// Load User model
const User = require('../models/User');


router.post('/signup', (req, res) => {
    const { name, email, password, password2, code } = req.body;
    let errors = [];
  
    if (!name || !email || !password || !password2) {
      errors.push({ msg: 'Please enter all fields' });
    }
  
    if (password != password2) {
      errors.push({ msg: 'Passwords do not match' });
    }
  
    if (password.length < 6) {
      errors.push({ msg: 'Password must be at least 6 characters' });
    }
  
    if (errors.length > 0) {
    //   res.render('register', {
    //     errors,
    //     name,
    //     email,
    //     password,
    //     password2
    //   });
    res.send({message: 'Errors found', errors});

    } else {
    var member = false;
    if(code === 'bumdiggydiggy'){
        member = true;
    }else{
        member = false;
    }
    const round1 = false;
    const round3 = false;
    const round2 = false;
      User.findOne({ email: email }).then(user => {
        if (user) {
          errors.push({ msg: 'Email already exists' });
          res.render('signup', {
            errors,
            name,
            email,
            password,
            password2
          });
        } else {
          const submitted = false;
          const newUser = new User({
            name,
            email,
            password,
            submitted,
            member, 
            round1,
            round2,
            round3
          });
          newUser.save();
          // req.flash(
          //   'success_msg',
          //   'You are now registered and can log in'
          // );
          res.render('register-success');
        }
      });
    }
  });
  
// Login
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/rules',
      failureRedirect: '/users/login',
      failureFlash: true
    })(req, res, next);
});
  
  // Logout
  router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
});

module.exports = router