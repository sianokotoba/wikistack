'use strict';

var express = require('express');
var wikiRouter = express.Router();
var models = require('../models');

module.exports = wikiRouter;

wikiRouter.get('/', function(req, res, next){
  res.render('index');
});

wikiRouter.get('/add', function(req, res, next) {

  res.render('addpage');
});

// wikiRouter.get('/users', function(req, res, next){
//   //get all users, do not change db
// });

// wikiRouter.get('/users/:name', function(req, res, next){
//   //get user 123, do not change db
// });

// wikiRouter.put('/users/:name', function(req, res, next){
//   //update user 123 in the db
// });

// wikiRouter.delete('/users/:name', function(req, res, next){
//   //delete user 123 from the db
// });

wikiRouter.post('/wiki', function(req, res, next){
  var name = req.body.author_name,
      email = req.body.email,
      title = req.body.title,
      page_content = req.body.page_content,
      page_status = req.body.page_status;

  console.log(req.params)
  if (models.User[name] !== name) {
    models.User
      .build({name: name, email: email})
      .save(); //can then use .then
    models.Page
      .build({title: title, urlTitle: title, content: page_content, status: page_status})
      .save();
  }

  // res.json(req.body);
  // when complete >> res.redirect('/');
});



