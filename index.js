var express = require('express');
var app = express();
var path = require('path');
var filepath = path.join(__dirname,'public')
app.use(express.static(filepath));
app.listen(3000,function(){
	console.log('server connected');
});