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
        let perPage = 5;
        let page = req.query.page || 1;
        //const events = await Event.find();
        const events = await Event.aggregate([ { $sort: { createdAt: -1 } } ])
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec();

        const count = await Event.countDocuments();
        const nextPage = parseInt(page) + 1;
        const hasNextPage = nextPage <= Math.ceil(count / perPage);


        res.render('index', { events,
                              current: page,
                              nextPage: nextPage });
    } catch (error) {
        console.log(error);   
    }
})


router.get('/event', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).send('Event niet gevonden');
    }

    res.render('event_page', { title: event.title, event });
  } catch (error) {
    console.error(error);
    //res.status(500).send('Er ging iets mis bij het ophalen van het event.');
  }
});


//Login page route
router.get('/login', (req, res) => {
    res.render('loginform');
})

//Cookie page route
router.get('/cookie', (req, res) => {
    res.render('cookies-page');
})

module.exports = router;