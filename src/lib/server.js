const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../../routes/api');
require('dotenv').config();
const Database = require('./database');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);

const app = express();

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://life-of-bernard.herokuapp.com');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());
app.use(cookieParser());

const store = new MongoDBSession({
  uri: process.env.DB,
  collection: 'mySessions'
})

app.enable('trust proxy');

app.use(session({
  secret: 'ec9907ebed0c4246f64038078ef69be42a86ad54',
  resave: false,
  saveUninitialized: false,
  store: store,
  proxy : true,
  cookie: {
    secure : true,
    sameSite: 'none',
  }
}));

app.use(passport.initialize());

// app.use(passport.session());

// passport config
var User = require('../../models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(routes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});