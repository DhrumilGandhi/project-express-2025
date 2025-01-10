const express = require('express');
const router = express.Router();

const { getContacts, deleteContact, updateContact, createContact, getContact } = require('../controllers/contactController');

router.route('/').get(getContacts);

router.route('/:id').get(getContact);

router.route('/').post(createContact);

router.route('/:id').put(updateContact);

router.route('/:id').delete(deleteContact);

module.exports = router;