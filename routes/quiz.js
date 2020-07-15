const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

const answersSchema = {
  a1: String,
  a2: String,
  a3: String
};

const Answer = new mongoose.model("answer",answersSchema);

app.get("/quiz", function(req, res) {
  res.render("quiz-page");
});

app.post("/", function(req, res) {
  const aOne = req.body.qone;
  const aTwo = req.body.qtwo;
  const aThree = req.body.qthree;

  const answer = new Answer({
    a1:aOne,
    a2:aTwo,
    a3:aThree
  });
  answer.save();
});
