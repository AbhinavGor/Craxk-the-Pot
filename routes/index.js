const  express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const User = require("../models/User");

router.get('/', forwardAuthenticated, (req, res)=>{
    res.render("landing");
})

router.get('/dashboard', ensureAuthenticated, (req, res)=>{
    res.send('Dash', {user: req.user})
})


router.get('/rules', ensureAuthenticated, (req, res)=>{
    res.send('Yu are reading rules now')
})
module.exports = router