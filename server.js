var express = require('express');
var app = express();


app.use('/store', function(req, res, next){
	console.log("Hej, jestem pośrednikiem między żądaniem a odpowiedzią!");
	next();
});

app.get('/', function(req, res) {
	res.send("Hello world!");
});
app.get('/store', function(req, res) {
	res.send("To jest sklep!")
});

app.use(function(req, res, next){
	console.log("Jestem pośrednikiem przy żądaniu do /store");

})


app.listen(3000);
app.use(function(req, res) {
	res.status(404).send("Wybacz, nie mogliśmy znaleźć tego, czego żądasz! :( ");
});