/*
*
* These are all the routes for the basic users to take.
*
*/

const express = require('express')
const router = express.Router();

//Home Route
router.get('/', (req, res) => {
    res.render('index');
})

//Cookie page Route
router.get('/cookie', (req, res) => {
    res.render('cookies-page');
})

module.exports = router;