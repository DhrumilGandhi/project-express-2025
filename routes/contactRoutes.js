const express = require('express');
const router = express.Router();

const { getContacts, deleteContact, updateContact, createContact, getContact } = require('../controllers/contactController');

router.route('/').get(getContacts).post(createContact);

router.route('/:id').get(getContact).delete(deleteContact).put(updateContact);

module.exports = router;