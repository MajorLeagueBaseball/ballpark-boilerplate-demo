var express = require('express')
var app = express();
var path = require('path');

// static directories
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));
app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/bootstrap-3.3.7-dist', express.static(path.join(__dirname, 'bootstrap-3.3.7-dist')));

app.get('/', function (req, res) {
    //res.sendFile('index.html');
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});