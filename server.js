var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var config ={
    username
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;

app.get('/counter',function(req,res)
{
counter=counter+1;
res.send(counter.toString());


});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/index.html'));
});
//article one is not working or not displaying because it is not created in the ui folder and  does not have html extension both of which are needed  for doing the complete application
app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/login.html'));
});


app.get('/inspi-articles', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/inspi-articles.html'));
});
app.get('/inspi-stories', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/inspi-stories.html'));
});
app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/about.html'));
});

app.get('/register', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/register.html'));
});

app.get('/home', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/index.html'));
});

app.get('/inspi-quotes', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/inspi-quotes.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});


