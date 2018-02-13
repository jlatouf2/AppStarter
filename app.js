var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http').Server(app);

app.use(bodyParser.json());

/*
//TO ADD A CLIENT FOLDER AND MAKE IT WORK:
app.use(express.static(path.join(__dirname, '/client')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/index.html'));
});
*/

app.use(express.static(path.join(__dirname, '/')));

app.post('/api/posts', function (req, res) {
  console.log('post received!');
  console.log(req.body.username);
  res.send(201);
});

//CURL WILL NOT WORK IF GRUNT CONNECT IS ON

//curl -v -H "Content-Type: application/json" -XPOST --data "{\"username\":\"dickeyxxx\"}" localhost:3000/api/posts
//curl -v -H "Content-Type: application/json" -X POST --data "{"username": "dick}" localhost:8000/api/posts
// curl --data "username=value1" http://localhost:3000/api/posts

//curl -X POST localhost:3000/api/posts
/*
curl -i \
    -H "Accept: application/json" \
    -H "X-HTTP-Method-Override: PUT" \
    -X POST -d "username":"30":true \
    http://localhost:3000/api/posts
*/

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,  'index.html'));
});

app.set('port', (process.env.PORT || 3000));

http.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});
