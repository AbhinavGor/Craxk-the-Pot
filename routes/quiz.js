const  express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const Response = require('../models/Response');
const { response } = require('express');

router.get("/quiz", ensureAuthenticated, function(req, res) {
  res.render("quiz-page");
});

router.post("/", ensureAuthenticated, function(req, res) {
  const aOne = req.body.qone;
  const aTwo = req.body.qtwo;
  const aThree = req.body.qthree;

  const response = new Response({
  });
  response.answers.push(aOne, aTwo, aThree);
  answer.save();
});

router.get('/round1', ensureAuthenticated, (req, res) => {
  res.render('round1', {user: req.user});
})

router.post('/round1', ensureAuthenticated, (req, res) => {
  const {aOne, aTwo, aThree} = req.body;

  const response = new Response({});
  response.answers.push(aOne, aTwo, aThree);
  response.save();
  res.send(response);
})
module.exports = router
