var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var postRouter = require('./routes/post');
var usersRouter = require('./routes/users');
var advertRouter = require('./routes/advertisement');
var catRouter = require('./routes/categories');
var subRourter = require('./routes/subscription');
var reactRouter = require('./routes/like_unlike');
var commentRouter = require('./routes/comment');
var indexRouter = require('./routes/comment');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', usersRouter);
app.use('/post', postRouter);
app.use('/users', usersRouter);
app.use('/advertisement', advertRouter);
app.use('/categories', catRouter);
app.use('/subscription', subRourter);
app.use('/like_unlike', reactRouter);
app.use('/comment', commentRouter);
app.use('/index', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
