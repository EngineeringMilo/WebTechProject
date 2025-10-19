require('dotenv').config();

const express = require('express');
const path = require('path');
//Setting up the express app
const app = express();
const PORT = 3000 || process.env.PORT;

//Adding the public (client side) folder
app.use(express.static('public')); 

//Templating engine (pug)
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//Use the main.js file in server/routes to define the routes
//This way we keep the app.js file better organised
app.use('/', require('./server/routes/main_router'));


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})