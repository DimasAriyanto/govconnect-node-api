const express = require('express');
const router = express();
const { register, login, logout } = require('../controllers/authController');
const { authenticateUser } = require('../middlewares/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', authenticateUser, logout);

module.exports = router;
