const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');

router.use(cookieParser());

const userLayout ='../views/userlayout'


const authMiddleware = (req,res,next) => {
    const token = req.cookies.token;

    if(!token){
        return res.render('login');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userID = decoded.userID;
        next();
    } catch (error) {
        return res.render('fourOone');
        
    }
}


/**
 * GET /
 * User - login
 */

router.get('/login', async (req, res) => {

    try {
        res.render('login', {layout: userLayout})
    } catch (error) {
        
    }

})

router.get('/register', async (req, res) => {

    try {
        res.render('register', {layout: userLayout})
    } catch (error) {
        
    }

})

/**
 * GET /
 * Profile
 */

router.get('/profile', authMiddleware, async (req, res) => {
    try {
        res.render('profile');
    } catch (error) {
        console.log(error);
    }

})



/**
 * POST
 * User - Check Login
 */

router.post('/login', async (req,res) => {

    // TODO check if the user is already logged in
    // if so send them to the profile
    try {
        //login logic
        const {email, password} = req.body;
        const user = await User.findOne({email})

        if (!user){
            return res.status(401).render('login', { error: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid){
            return res.status(401).render('login', { error: 'Invalid credentials' });
        }

        const token = jwt.sign({ userID: user._id}, process.env.JWT_SECRET)
        res.cookie('token', token, {httpOnly: true});
        res.redirect('/profile')
    } catch (error) {
        
    }
})

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
            res.status(201).json({message: 'User created', user});
        } catch (error) {
            if(error.code === 11000){
                res.status(409).json({message: 'User already exists'})
            }
            res.status(500).json({message: 'Error on server'})
        }
    } catch (error) {
        
    }
})

module.exports = router;