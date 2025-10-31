/*
*
* These are all the routes for the basic users to take.
*
*/

const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

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
      let perPage = 5;
      let page = req.query.page || 1;
      const events = await Event.aggregate([ { $sort: { createdAt: -1 } } ])
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

      const count = await Event.countDocuments();
      const prevPage = parseInt(page) + 1;
      const nextPage = parseInt(page) - 1;
      const hasPrevPage = prevPage < Math.ceil(count / perPage);
      const hasNextPage = prevPage > 2;


      res.render('index', { events,
                            current: page,
                            count: count,
                            joke: joke,
                            prevPage: hasPrevPage ? prevPage : null,
                            nextPage: hasNextPage ? nextPage : null });
  } catch (error) {
      console.log(error);   
  }
});


router.get('/event/:id', async (req, res) => {
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

//Cookie page route
router.get('/cookie', (req, res) => {
    res.render('cookies-page');
})

module.exports = router;