const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const auth = require('../middleware/auth');
const getUser = require('../controllers/auth/get-user');
const authUser = require('../controllers/auth/auth-user');

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', auth, getUser);

// @route   POST api/auth
// @desc    Auth user and get token
// @access  Public
router.post(
  '/',
  [
    body('email', 'Please include a valid email').isEmail(),
    body('password', 'Password is required').exists(),
  ],
  authUser
);

module.exports = router;
