var express = require("express");
var path = require("path");
var multer  = require('multer');
var upload = multer();

var app = express();

app.set('port', (process.env.PORT || 5000));

app.set("view engine", "pug");

// app.set("views", process.argv[3]);
app.set('views', path.join(__dirname, 'views'));

app.get("/", function(req, res) {
  res.render('index', {date: new Date().toDateString()});
});

app.post("/", upload.single('file'), function(req, res) {
  console.log(req.file);

  var json = {
    size: req.file.size
  };
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(json));
  res.end();
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port ', app.get('port'));
});
