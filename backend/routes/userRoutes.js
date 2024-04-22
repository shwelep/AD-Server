const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', userController.signup);
router.get('/', userController.getUsers);

router.post('/login', userController.login);

module.exports = router;