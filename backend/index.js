var config = require('informations.config');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var socket = require('socket.io');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var arr_equal = require('array-equal');
var postMethod = require('postMethod');
var getMethod = require('getMethod');
var getProblems = require('getProblems');
var tagPostMethod = require('tagPostMethod');
var profileMethod = require('profileMethod');
var app = express();
var Db = require('Database');
var cors = require('cors');
var regist = require('regist');
var corsOption = config.corsOption;

app.use(bodyParser.json({type: "application/json"}));
app.use(cookieParser());

Db.connect(function(){
  app.listen(3000);
});

//Because I give it wrong parameter before, and I don' want to change it. So I use this code...
//these two method use Questions db.
app.get('/api/problems', function(req, res){
  getMethod(req, res, Db.db.collection('Questions'));
});

app.get('/api/problems/all', function(req, res){
  getProblems(req, res, Db.db.collection('Questions'));
});

app.get('/users/:id', function(req, res){
  profileMethod(req, res);
});

app.post('/login', function(req, res){
  regist.login(req, res);
})

app.post('/register', function(req, res){
  regist.register(req, res);
})

app.get('/verify', function(req, res){
  regist.verify(req, res);
})

app.post('/logout', function(req, res){
  regist.logout(req, res);
})

app.post('/api/upans', function(req, res){
  postMethod(req, res, Db.db.collection('Questions'));
});

app.post('/api/', function(req, res){
  tagPostMethod(req, res);
});
