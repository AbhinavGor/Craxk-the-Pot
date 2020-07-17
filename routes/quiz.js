const  express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const Response = require('../models/Response');
const { response } = require('express');

router.get("/quiz", ensureAuthenticated, function(req, res) {
  res.render("quiz-page");
});

router.get('/round1', ensureAuthenticated, (req, res) => {
  res.render('round1', {user: req.user});
})

router.get('/round2', ensureAuthenticated, (req, res) => {
  res.render('round2', {user: req.user});
})

router.get('/round3', ensureAuthenticated, (req, res) => {
  res.render('round3', {user: req.user});
})

router.post('/round1', ensureAuthenticated, (req, res) => {
  const {aOne, aTwo, aThree, aFour, aFive, aSix, aSeven} = req.body;

  const response = new Response({});
  response.round1.push(aOne, aTwo, aThree, aFour, aFive, aSix, aSeven);
  response.name = req.user.name;
  response.user = req.user._id;
  response.save();
  user = req.user;
  user.round1 = true;
  user.save();
  res.render('submit-success');
})

router.post('/round2', ensureAuthenticated, async (req, res) => {
  const {aOne, aTwo, aThree, aFour, aFive, aSix, aSeven} = req.body;

  user = req.user._id;

  const response = await Response.findOne({ user });
  response.round2.push(aOne, aTwo, aThree, aFour, aFive, aSix, aSeven);
  response.save();
  user = req.user;
  user.round2 = true;
  user.save();
  console.log(response);
  res.render('submit-success');
})

router.post('/round3', ensureAuthenticated, async (req, res) => {
  const {aOne, aTwo, aThree} = req.body;
  user = req.user._id;
  const response = await Response.findOne({ user });
  response.round3.push(aOne, aTwo, aThree);
  response.save();
  user = req.user;
  user.round3 = true;
  user.save();
  console.log(response);
  res.render('submit-success');
})
module.exports = router
