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
var IS_VALID = require('IS_VALID');
var app = express();
var Db = require('Database');
var regist = require('regist');
var new_question = require('new_question');
var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', 'http://infor.org:20001');
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
var IS_USER = require('IS_USER');
var passwd = require('passwd');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(allowCrossDomain);

Db.connect(function(){
  app.listen(5005);
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
	res.header('Access-Control-Allow-Credentials', 'true');
	IS_USER(req, function(is_login){
		console.log(`index.js /login is_login ${is_login}`)
  	regist.login(req, res, is_login); //
	})
})

app.post('/register', function(req, res){
  regist.register(req, res);
})

app.get('/verify', function(req, res){
  regist.verify(req, res);
})

app.post('/logout', function(req, res){
	res.header('Access-Control-Allow-Credentials', 'true');
	IS_USER(req, function(is_login){
  	regist.logout(req, res, is_login); //
	})
})

app.post('/api/upans', function(req, res){
	res.header('Access-Control-Allow-Credentials', 'true');
	IS_USER(req, function(is_login){
  	postMethod(req, res, Db.db.collection('Questions'), is_login); //	
	})
});

app.post('/api/tag', function(req, res){
  tagPostMethod(req, res);
});

app.get('/api/resend', function(req, res){
	res.header('Access-Control-Allow-Credentials', 'true');
	IS_USER(req, function(is_login){
		regist.resend(req, res, is_login)	//
	})
});

app.get('/api/is_login', function(req, res){
	res.header('Access-Control-Allow-Credentials', 'true');
	IS_USER(req, function(is_login){
		console.log(`index.js /api/is_login is_login ${is_login}`)
		if(is_login){
			res.end(JSON.stringify({login: true}))
		}else{
			res.end(JSON.stringify({login: false}))
		}	
	})
});

app.get('/api/is_valid', function(req, res){
	res.header('Access-Control-Allow-Credentials', 'true');
	IS_USER(req, function(is_login){
		IS_VALID(req, res, is_login) //	
	})
});

app.post('/api/passwd', function(req, res){
	res.header('Access-Control-Allow-Credentials', 'true');
	IS_USER(req, function(is_login){
		passwd(req, res, is_login);
	})
});

app.post('/dfjk/sdfjkl', function(req, res){
	res.header('Access-Control-Allow-Credentials', 'true');
	IS_USER(req, function(is_login){
		new_question(req, res, is_login);
	})
});
