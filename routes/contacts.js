const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const auth = require('../middleware/auth');
const createContact = require('../controllers/contacts/create-contact');
const readContacts = require('../controllers/contacts/read-contacts');
const updateContact = require('../controllers/contacts/update-contact');
const deleteContact = require('../controllers/contacts/delete-contact');

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post(
  '/',
  [auth, [body('name', 'Name is required').not().isEmpty()]],
  createContact
);

// @route   GET api/contacts
// @desc    Get all users' contacts
// @access  Private
router.get('/', auth, readContacts);

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.put('/:id', auth, updateContact);

// @route   DELETE api/contacts/:id
// @desc    Delete contact
// @access  Private
router.delete('/:id', auth, deleteContact);

module.exports = router;
