var createError = require('http-errors');
var express = require('express');
var path = require('path');

var indexRouter = require('./router');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(3000, () => console.log(`Example app listening on port 3000!`))

module.exports = app;
