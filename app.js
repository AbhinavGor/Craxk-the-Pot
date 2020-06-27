const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/",function(req,res){
  res.render("checkbox");
});

app.post("/",function(req,res){
  console.log(req.body.food);
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
