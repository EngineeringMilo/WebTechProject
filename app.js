//app.js
require('dotenv').config();

const express = require('express');
const path = require('path');
const connectDB = require('./server/config/db');

const cookieParser=require('cookie-parser');
const MongoStore = require('connect-mongo');
const session = require('express-session');

const methodOverride = require('method-override');

//Setting up the express app
const app = express();
const PORT = 3000 || process.env.PORT;

//Connecting to the MongoDB
connectDB();

//Adding the public (client side) folder
app.use(express.static(path.join(__dirname, "public")));//css,images...
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

//Needed to parse the JSON from the forms
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Templating engine (pug)
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(cookieParser());
app.use(methodOverride('_method'));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,// don't save if nothing changed
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI
  }),
  cookie: {maxAge: new Date(Date.now() + (3600000))}
}))

//Use the main.js file in server/routes to define the routes
//This way we keep the app.js file better organised
app.use('/', require('./server/routes/main_router'));
app.use('/', require('./server/routes/user_router'));
app.use('/', require('./server/routes/admin_router'));

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})

// When the user generates a 404 error this will handle it
// It shows a four o four page

app.use(function(req, res, next) {
  res.status(404);

  if (req.accepts('html')) {
    res.render('fourOfour');
    return;
  }
});


app.get("/", (req, res) => {
  const consentStatus = req.cookies.cookieConsent;// pop-up disapear if accepted
  res.render("index", { consentStatus });
});

app.post("/accept-cookies", (req, res) => {
  res.cookie("cookieConsent", "accepted", { maxAge: 86400000,httpOnly:true, sameSite:"lax" });// save cookie named cookieconsent with value accepted
  res.sendStatus(200);
});

app.post("/reject-cookies", (req, res) => {
  res.cookie("cookieConsent", "rejected", { maxAge:  86400000,httpOnly:true, sameSite:"lax" });// cookies only sent from own site
  res.redirect("/");//redirect user to homepage
});

// Route: Clear Cookie