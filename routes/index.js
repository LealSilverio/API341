const router = require('express').Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.base);

module.exports = router;