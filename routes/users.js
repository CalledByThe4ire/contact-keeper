const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const createUser = require('../controllers/users/create-user');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  '/',
  [
    body('name', 'Please add name').not().isEmpty(),
    body('email', 'Please include a valid email').isEmail(),
    body(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  createUser
);

module.exports = router;
