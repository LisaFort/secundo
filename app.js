var express = require("express");
var app = express();

app.use(express.static('public'));
app.get("/what", function(req, res) {
	var sentence = "Always sunny";
	res.json(sentence);
});
app.listen(1000);
console.log("Listen on raaaa")