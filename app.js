var express = require("express");
var app = express();// casi todo un server

app.get("/",function(req, res) {
	res.send("hola Mundo");
});

app.listen(3000, function(){
	console.log("app running at port 3000");
});