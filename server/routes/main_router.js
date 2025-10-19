/*
*
* These are all the routes for the basic users to take.
*
*/

const express = require('express')
const router = express.Router();
const Event = require('../models/Event')

/*
GET method of the home route
*/
router.get('', async (req, res) => {
    
    try {
        const events = await Event.find();
        res.render('index', { events });
    } catch (error) {
        console.log(error);   
    }
})

//Cookie page Route
router.get('/cookie', (req, res) => {
    res.render('cookies-page');
})

module.exports = router;