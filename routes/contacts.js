const express = require('express');

const contactsController = require('../controllers/contacts-controller');

const router = express.Router();

router.get('/', contactsController.getAllData);
router.get('/:id', contactsController.getSingleData);

module.exports = router;