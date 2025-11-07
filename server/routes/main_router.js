/*
*
* These are all the routes for the basic users to take.
*
*/

const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

/*
GET method of the home route
*/
router.get('', async (req, res) => {
  
  /**
   *  This Portion is to fetch a joke from an external API
   *  The reason that we do this server-side is because if people can alter
   *  the link they could potentionally remove certain flags and get no-so-nice jokes.
   */
  let joke;
  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single");
    if (!response.ok) {
      throw new Error(`API returned status ${response.status}`);
    }
    const data = await response.json();
    joke = data.joke;
  } catch (error) {
    console.log(error);
  }
  try {
      //Logic to display a certain amount of pages on the homepage
      let perPage = 2;
      let page = req.query.page || 1;
      const events = await Event.aggregate([ { $sort: { date: 1 } } ])
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

      const eventsForMap = await Event.find();

      const count = await Event.countDocuments();
      const prevPage = parseInt(page) + 1;
      const nextPage = parseInt(page) - 1;
      const hasPrevPage = prevPage <= Math.ceil(count / perPage);
      const hasNextPage = prevPage > 2;

      res.render('index', { events,
                            eventsForMap,
                            current: page,
                            count: count,
                            joke: joke,
                            prevPage: hasPrevPage ? prevPage : null,
                            nextPage: hasNextPage ? nextPage : null });
  } catch (error) {
      console.log(error);   
  }
});

// This is an extra check just to see if the user is logged in and if so to add a 'join' button to the event page
const eventAuthMiddleware = async (req,res,next) => {
  const token = req.cookies.token;
  if (!token) {
    req.user = null;
    return next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userID);
    user = req.user;
  } catch (err) {
    req.user = null; // Ongeldige token? gewoon verdergaan als gast
  }
  next();
}

router.get('/event/:id',eventAuthMiddleware, async (req, res) => {
  try { 
    const event = await Event.findById(req.params.id);
    res.render('event_page', { 
                              user: req.user, 
                              event});
  } catch (error) {
    console.error(error);
    //res.status(500).send('Er ging iets mis bij het ophalen van het event.');
  }
});

router.post('/event/:id/join', eventAuthMiddleware, async (req, res) => {
  if (!req.user) {
    return res.redirect('/login');
  }

  try {
   const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).send('Event not found');

    const user = req.user;
    const index = user.joinedEvents.indexOf(event._id);

    if (index === -1) {
      // Not yet joined
      user.joinedEvents.push(event._id);
    } else {
      // Leave
      user.joinedEvents.splice(index, 1);
    }

    await user.save();
    res.redirect(`/event/${event._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong.');
  }
});

//Cookie page route
router.get('/cookie', (req, res) => {
    res.render('cookies-page');
});

// API route voor filtering met pagination
router.get('/api/events/filter', async (req, res) => {
  try {
    const category = req.query.category;
    const page = parseInt(req.query.page) || 1;
    const perPage = 2;
    
    let query = {};
    if (category && category !== '') {
      query.targetAudience = category;
    }
    
    const events = await Event.find(query)
      .sort({ date: -1 })
      .skip((page - 1) * perPage)
      .limit(perPage);
    
    const count = await Event.countDocuments(query);
    const totalPages = Math.ceil(count / perPage);
    
    res.json({ 
      events,
      currentPage: page,
      totalPages,
      hasPrevPage: page < totalPages,
      hasNextPage: page > 1
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});


// API route om alle events te krijgen (voor map) zonder pagination
router.get('/api/events/all', async (req, res) => {
  try {
    const category = req.query.category;
    
    let query = {};
    if (category && category !== '') {
      query.targetAudience = category;
    }
    
    const events = await Event.find(query).sort({ date: 1 });
    
    res.json({ events });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});
module.exports = router;