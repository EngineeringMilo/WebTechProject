//user_router.js
const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const User = require('../models/User');
const Registration = require('../models/Registration');
const bcrypt = require('bcrypt');//to hash passwords
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');

router.use(cookieParser());

//check if user is logged in
const authMiddleware = async (req,res,next) => {
    const token = req.cookies.token;

    if(!token){
        return res.render('login');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userID);
        req.user = user;
        next();
    } catch (error) {
        return res.render('fourOone');   
    }
}

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
    req.user = null; // guest mode
  }
  next();
}

function parseYouTubeUrl(url) {
  if (!url) return null;

  // YouTube video ID regex (detecteert diverse formats)
  const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);

  if (!match) return null;

  const videoId = match[1];
  return {
    id: videoId,
    embedUrl: `https://www.youtube.com/embed/${videoId}`
  };
}



/**
 * GET /
 * User - login
 */

router.get('/login', async (req, res) => {

    try {
        const redirect = req.query.redirect || '/profile';
        res.render('login', {redirect});
    } catch (error) {
        console.log(error);
    }

})

router.get('/register', async (req, res) => {

    try {
        res.render('register');
    } catch (error) {
        console.log(error);
    }

})

/**
 * GET /
 * Profile
 */

router.get('/profile', authMiddleware, async (req, res) => {
    try {
        if(req.user.role === "admin"){
            const users = await User.find({role: 'user'});
            const toBeApprovedUsers = await User.find({isApproved: false})
            return res.render('adminpage', {user: req.user, users, toBeApprovedUsers})
        }
        const events = await Event.find({createdBy: req.user._id});//fetch all events created by logged in user
        const regs = await Registration.find({ userId: req.user._id }).populate("eventId");
        await req.user.populate('joinedEvents');
        res.render('profile', {user: req.user, events, joinedEvents: req.user.joinedEvents, regs});
    } catch (error) {
        console.log(error);
    }

})

/**
 * 
 * GET/
 * Create a new event
 * 
 */

router.get('/createevent', authMiddleware, async (req, res) => {
    try {
        res.render('event-creation');
    } catch (error) {
        console.log(error);
    }
})


/**
 * 
 * POST/
 * Create a new event
 * 
 */

router.post('/createevent', authMiddleware, async (req, res) => {
    try {
        req.body
        // This will make an API call to openrouteservice
        // This will take the textual address and return the coordinates
        // These coordinates will be used to put markers on the map
        async function geocodeAddress(address){
            const apiKey = process.env.OPENROUTESERVICE_API_KEY;
            const geocodeUrl = `https://api.openrouteservice.org/geocode/search?api_key=${apiKey}&text=${encodeURIComponent(address)}&boundary.country=BE&size=1`;
            const response = await fetch(geocodeUrl);
            if (!response.ok) {
                throw new Error(`API returned status ${response.status}`);
            }
            const data = await response.json();

            if (data.features && data.features.length > 0) {
                    const coordinates = data.features[0].geometry.coordinates;
                    return [coordinates[1], coordinates[0]]; // [longitude, latitude]
                }
            throw new Error('Address not found');
        }

        const locCoordinates = await geocodeAddress(req.body.location);

        const yt = parseYouTubeUrl(req.body.promoURL);
        let embedURL = null
        if(yt){
            embedURL = yt.embedUrl;
        }

        try {
            const newEvent = new Event({
                title: req.body.title,
                description: req.body.description,
                location: req.body.location,
                locationCoordinates: locCoordinates,
                date: req.body.date,
                createdBy: req.user._id,
                targetAudience: req.body.targetAudience,
                ticketPrice: req.body.ticketPrice,
                promoURL: embedURL
            });

            await Event.create(newEvent);
        } catch (error) {
            console.log(error);
        }
        res.redirect('/profile')
    } catch (error) {
        console.log(error);
    }
})

router.post('/event/:id/join', eventAuthMiddleware, async (req, res) => {
  if (!req.user) {
    return res.redirect('/login');
  }

  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).send('Event not found');
    const existingRegistration = await Registration.findOne({
        userId: req.user.id,
        eventId: req.params.id,
    });
    const user = req.user;
    if (existingRegistration){
        await Registration.findByIdAndDelete(existingRegistration.id)
    }
    else if(existingRegistration === null){
        await Registration.create({
            userId: req.user.id,
            eventId: req.params.id,
        });
    }
    res.redirect(`/event/${event._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong.');
  }
});


/**
 * 
 * GET/
 * Update an existing event
 * 
 */

router.get('/edit-event/:id', authMiddleware, async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if(event.createdBy.toString() === req.user._id.toString() || req.user.role === "admin"){
            res.render('event-edit', {
                event
            });
        }
        else {
            res.render('fourOfour');
        }
        
    } catch (error) {
        console.log(error);
    }
});



/**
 * 
 * PUT/
 * Update an existing event
 * 
 */

router.put('/edit-event/:id', authMiddleware, async (req, res) => {
    try {
        await Event.findByIdAndUpdate(req.params.id,{
            title: req.body.title,
            description: req.body.description,
            targetAudience: req.body.targetAudience,
            date: req.body.date,
            ticketPrice: req.body.ticketPrice
        });
        res.redirect(`/edit-event/${req.params.id}`);
    } catch (error) {
        console.log(error);
    }
});


/**
 * 
 * DELETE/
 * Update an existing event
 * 
 */

router.delete('/delete-event/:id', authMiddleware, async (req, res) => {
    try {
        //TODO Check if the person who wants to delete it is the right person
        await Event.findByIdAndDelete(req.params.id);
        res.redirect(`/profile`);
    } catch (error) {
        console.log(error);
    }
});


/**
 * POST
 * User - Check Login
 */

router.post('/login', async (req,res) => {

    // TODO check if the user is already logged in
    // if so send them to the profile
    try {
        //login logic
        const {email, password, redirect} = req.body;
        const user = await User.findOne({email});

        if (!user){
            return res.status(401).render('login', { error: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid){
            return res.status(401).render('login', { error: 'Invalid credentials' });
        };

        const token = jwt.sign({ userID: user._id}, process.env.JWT_SECRET);
        res.cookie('token', token, {httpOnly: true});
        res.redirect(redirect || '/profile');
    } catch (error) {
        console.log(error);
    }
});



/**
 * GET
 * User - Logout
 */

router.get('/logout', (req,res) => {
    res.clearCookie('token');
    res.redirect('/')
});



/**
 * POST
 * User - Register
 */

router.post('/register', async (req,res) => {
    try {
        const {username, email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            const user = await User.create({username, email, password: hashedPassword});
            const token = jwt.sign({ userID: user._id}, process.env.JWT_SECRET);
            res.cookie('token', token, {httpOnly: true});
            res.status(201).render('profile', {user});
        } catch (error) {
            if(error.code === 11000){
                return res.status(409).render('register', {error: 'User already exists'})
            };
            res.status(500).render('register', {error: 'Error on server'});
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;