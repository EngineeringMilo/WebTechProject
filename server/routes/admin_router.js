const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const User = require('../models/User');
const bcrypt = require('bcrypt');//to hash passwords
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');

router.use(cookieParser());

const authAdminMiddleware = async (req,res,next) => {
    const token = req.cookies.token;

    if(!token){
        return res.render('login');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userID);
        req.user = user;
        if(user.role === 'admin'){
            next();
        }
    } catch (error) {
        return res.render('fourOone');   
    }
}

router.get('/edit-user/:id', authAdminMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const events = await Event.find({createdBy: req.params.id})
        res.render('edit-user', {user, events});
        
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

router.put('/edit-user/:id', authAdminMiddleware, async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        await User.findByIdAndUpdate(req.params.id,{
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        res.redirect('/profile');
    } catch (error) {
        console.log(error);
    }
});


/**
 * 
 * DELETE/
 * Update an existing user
 * 
 */


router.delete('/delete-user/:id', authAdminMiddleware, async (req, res) => {
  const userId = req.params.id;
  
  // First delete all the users events
  await Event.deleteMany({ createdBy: userId });
  
  // Verwijder gebruiker
  await User.findByIdAndDelete(userId);
  
  res.redirect('/profile');
});


module.exports = router;