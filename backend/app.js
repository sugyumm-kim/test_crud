var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
// frontend/src/components/login.vue
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

//////
// const bcrypt = require (bcrypt-nodejs);


// Connection 객체 생성 
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '1234',
  database: 'test_crud'
});
// Connect
connection.connect(function (err) {
  if (err) {
    console.error('mysql connection error'); 
    console.error(err);
    throw err;
  }
});


// insert
app.post('/regist', function (req, res) {
  var user = {
    'userid': req.body.userid,
    'name': req.body.name,
    'password': req.body.password
  };
  var query = connection.query('insert into users set ?', user, function (err, result) {
    if (err) {
      console.error(err);
      throw err;
    }
    res.status(200).send('success');
  });
});

module.exports = app;