const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

// GET all contacts
router.get('/', contactController.getContacts);

// GET a contact by ID
router.get('/:id', contactController.getContactById);

// CREATE a new contact
router.post('/', contactController.createContact);

// UPDATE an existing contact
router.put('/:id', contactController.updateContact);

// DELETE a contact by ID
router.delete('/:id', contactController.deleteContactById);

// GET contacts by name
router.get('/cname/:cname', contactController.getContactsByName);
router.get('/cphone_number/:cphone_number', contactController.getContactsByName);
router.get('/cemail/:cemail', contactController.getContactsByName);
router.get('/cmessage/:cmessage', contactController.getContactsByName);

module.exports = router;
