var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var express = require('express');

module.exports = function(app, envConfig){
// view engine setup
    app.set('views', path.join(envConfig.rootPath, 'views'));
    app.set('view engine', 'ejs');
    //app.set('view options', {layout: 'layout.ejs'});


    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(cookieParser());
    app.use(express.static(path.join(envConfig.rootPath, 'public')));



};
