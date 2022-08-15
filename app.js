var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var categoriesRouter = require('./routes/categories');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var categories_productsRouter = require('./routes/categories_products');
var postsRouter = require('./routes/posts');
var ConfigColumnsRouter = require('./routes/ConfigColumns');
var clientsRouter = require('./routes/clients');
var commentsRouter = require('./routes/comments');
const bodyParser = require('body-parser');



var cors = require('cors')



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(cors());


app.use('/api/categories', categoriesRouter);
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/categories_products', categories_productsRouter);
app.use('/api/posts', postsRouter);
app.use('/api/ConfigColumns', ConfigColumnsRouter);
app.use('/api/clients', clientsRouter);
app.use('/api/comments', commentsRouter);



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
