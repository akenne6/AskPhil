var express = require('express');
var path = require('path');
var app = express();
var config = {
	root: path.normalize(__dirname + '/..')
}

app.use(express.static(path.join(config.root, 'client')));

app.set('angularApp', 'client/src');

app.get('/', function (req, res) {
  res.sendFile(app.get('angularApp') + '/index.html');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
