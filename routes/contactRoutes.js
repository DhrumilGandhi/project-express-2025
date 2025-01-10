const express = require('express');
const router = express.Router();

const { getContacts, deleteContact, updateContact, createContact, getContact } = require('../controllers/contactController');

router.route('/').get(getContacts).post(createContact);

router.route('/:id').get(getContact);

router.route('/:id').put(updateContact);

router.route('/:id').delete(deleteContact);

module.exports = router;