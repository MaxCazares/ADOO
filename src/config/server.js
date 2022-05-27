const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//settings
app.set('port', process.env.PORT || 5000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/../app/views'));

module.exports = app;