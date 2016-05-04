var express = require('express');
var app = express();

app.listen(80);

app.use(express.static('../frontend'))
app.get('/', function(req, res){
	res.sendFile('../frontend/index.html');
});
app.get('/aboutus', function(req, res){
	res.sendFile('../frontend/aboutus.html');
});
app.get('/joinus', function(req, res){
	res.sendFile('../frontend/joinus.html');
});
app.get('/logout', function(req, res){
	res.sendFile('../frontend/logout.html');
});
app.get('/main-single', function(req, res){
	res.sendFile('../frontend/main-single.html');
});
app.get('/news', function(req, res){
	res.sendFile('../frontend/news.html');
});
app.get('/settings', function(req, res){
	res.sendFile('../frontend/settings.html');
});
app.get('/user/forgotpw', function(req, res){
	res.sendFile('../frontend/user/forgotpw.html');
});
app.get('/login', function(req, res){
	res.sendFile('../frontend/login/login.html');
});