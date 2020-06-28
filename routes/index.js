const  express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const User = require("../models/User");

router.get('/', forwardAuthenticated, (req, res)=>{
    res.render("landing");
})


router.get('/login', forwardAuthenticated, (req, res)=>{
    res.render("login");
})

router.get('/signup', forwardAuthenticated, (req, res)=>{
    res.render("signup");
})

router.get('/dashboard', ensureAuthenticated, (req, res)=>{
    res.render("dashboard")
})


router.get('/rules', ensureAuthenticated, (req, res)=>{
    res.render("rules")
})
module.exports = router