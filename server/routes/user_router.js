const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

const userLayout ='../views/userlayout'
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

module.exports = router;