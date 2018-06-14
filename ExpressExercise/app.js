var express = require("express");
var app = express();

// WELCOME PAGE
app.get("/", function (req, res) {
  res.send("Hi there, welcome to my assignment!");
});

// ROUTE PARAMETERS

app.get("/speak/:animal", function (req, res) {
  var sounds = {
    pig: 'Oink',
    cow: 'Moo',
    dog: 'Woof Woof!',
    cat: 'I hate you human',
    goldfish: '...'
  }
  var animal = req.params.animal.lowerCase();
  var sound = sounds[animal];
  res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:message/:times", function (req, res) {
  var message = req.params.message;
  var times = Number(req.params.times);
  var result = "";
  for (var i = 0; i < times; i++) {
    result += message + " ";
  }
  res.send(result);
})

// error page
app.get("*", function (req, res) {
  res.send("Sorry, page not found...What are you doing with your life?");
});

// tell express to listen
app.listen(4000, function () {
  console.log("SERVER HAS STARTED!");
});