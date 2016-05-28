var express = require('express');
var app = express();
var path = require('path');

app.listen(80);


app.get('/', function(req, res){
	res.sendFile(path.resolve(__dirname+'/../../frontend/index.html'));
});
app.get('/aboutus', function(req, res){
	res.sendFile(path.resolve(__dirname+'/../../frontend/aboutus.html'));
});
app.get('/joinus', function(req, res){
	res.sendFile(path.resolve(__dirname+'/../../frontend/joinus.html'));
});
app.get('/logout', function(req, res){
	res.sendFile(path.resolve(__dirname+'/../../frontend/logout.html'));
});
app.get('/main-single', function(req, res){
	res.sendFile(path.resolve(__dirname+'/../../frontend/main-single.html'));
});
app.get('/news', function(req, res){
	res.sendFile(path.resolve(__dirname+'/../../frontend/news.html'));
});
app.get('/settings', function(req, res){
	res.sendFile(path.resolve(__dirname+'/../../frontend/settings.html'));
});
app.get('/user/forgotpw', function(req, res){
	res.sendFile(path.resolve(__dirname+'/../../frontend/user/forgotpw.html'));
});
app.get('/login', function(req, res){
	res.sendFile(path.resolve(__dirname+'/../../frontend/login/login.html'));
});
app.get('/register', function(req, res){
	res.sendFile(path.resolve(__dirname+'/../../frontend/login/login.html'));
});
app.get('/user/:id', function(req, res){
	res.sendFile(path.resolve(__dirname+'/../../frontend/profile.html'));
});
app.get('/problem/:id', function(req, res){
	res.sendFile(path.resolve(__dirname+'/../../frontend/problem.html'));
});
app.use(express.static(path.resolve(__dirname+'/../../frontend')));
app.use(express.static(path.resolve(__dirname+'/../../frontend/login')));