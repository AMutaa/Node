var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");


var catSchema = new mongoose.Schema({
 name: String,
 age: Number,
 temperament: String
});

var Cat = mongoose.model("Cat", catSchema);


Cat.create({
 name: "Snow White",
 age: 15,
 temperament: "Bland"
}, function (err, cat) {
 if (err) {
  console.log(err);
 } else {
  console.log(cat);
 }
})
// adding a new cat to the database

// var george = new Cat({
//  name: "Mrs. Norris",
//  age: 7,
//  temparament: "Evil"
// });

// // george.save();

// // george.save(function (err, cat) {
// //  if (err) {
// //   console.log("something went wrong")
// //  } else {
// //   console.log("We just saved a cat to the database")
// //   console.log(cat);
// //  }
// // });



// retrieving cats from a database

Cat.find({}, function (err, cats) {
 if (err) {
  console.log("OH NO, ERROR!");
  console.log(err);
 } else {
  console.log("ALL THE CATS....");
  console.log(cats);
 }
})