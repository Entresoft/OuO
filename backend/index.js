var config = require('informations.config');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var socket = require('socket.io');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var arr_equal = require('array-equal');
var postMethod = require('postMethod.js');
var getMethod = require('getMethod');
var headMethod = require('headMethod');
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

app.head('/', cors(corsOption) , function(req, res){
  headMethod(req, res);
});

//Because I give it wrong parameter before, and I don' want to change it. So I use this code...
//these two method use Questions db.
app.get('/api/problems', function(req, res){
  getMethod(req, res, Db.db.collection('Questions'));
});

app.post('/api', function(req, res){
  postMethod(req, res, Db.db.collection('Questions'));
});
