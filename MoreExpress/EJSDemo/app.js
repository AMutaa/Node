var express = require('express');
var app = express();

app.get('/', function (req, res) {
 res.render('home.ejs');
})

app.get('/fallinlovewith/:thing', function (req, res) {
 var thing = req.params.thing;
 res.render('love.ejs', {
  thingVar: thing
 });
});

app.get('/posts', function (req, res) {
 var posts = [{
   title: 'Post 1',
   author: 'Suzie'
  },

  {
   title: 'My adorable pet bunny',
   author: 'Charlie'
  },

  {
   title: 'Can you believe this Pomsky',
   author: 'Pius'
  }
 ];

 res.render('posts.ejs', {
  posts: posts
 });
})








app.listen(5000, function () {
 console.log('Server is listening!!!')
})