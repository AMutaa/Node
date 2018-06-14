var express = require("express");
var app = express();

// WELCOME PAGE
app.get("/", function(req, res) {
  res.send("Hi there, welcome to my assignment!");
});

// ROUTE PARAMETERS

app.get("/speak/:pagename", function(req, res) {
  var page = req.params.pagename;
  res.send("The pig says 'Oink'");
  res.send("The cow says 'Moo'");
});

// error page
app.get("*", function(req, res) {
  res.send("Sorry, page not found...What are you doing with your life?");
});

// tell express to listen
app.listen(4000, function() {
  console.log("SERVER HAS STARTED!");
});
