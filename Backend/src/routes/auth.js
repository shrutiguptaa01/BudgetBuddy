const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/authController.js');

router.post('/register', ctrl.register);
router.post('/login', ctrl.login);
router.post('/verify-mpin', ctrl.verifyMpin);
router.post('/regenerate-mpin', ctrl.regenerateMpin);
router.post('/logout', ctrl.logout);

module.exports = router;
