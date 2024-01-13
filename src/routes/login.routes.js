const express = require('express');
const router = express.Router();
const accountController = require('../app/controllers/AccountController');

router.get('/', accountController.index);
router.post('/submit', accountController.login);
router.get('/logout', accountController.logout);

module.exports = router;