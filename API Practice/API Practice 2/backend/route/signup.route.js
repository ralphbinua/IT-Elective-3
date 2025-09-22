const express = require('express');
const router = express.Router();
const Signup = require('../models/signup.model');
const { postSignup, getSignup } = require('../controller/signup.controller');

// Route to handle user signup
router.post('/signup', postSignup);
router.get('/signup', getSignup);

module.exports = router;