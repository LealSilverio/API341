const router = require('express').Router();
const indexController = require('../controllers/indexController');
const contactsRoutes = require('../routes/contacts');

router.get('/', indexController.base);
router.get('/contacts', contactsRoutes);

module.exports = router;