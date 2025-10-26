// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { register, login, me } = require('../controllers/authController');
const { authenticate, authorizeRole } = require('../middlewares/authMiddleware');

// register is admin-only
router.post('/register', authenticate, authorizeRole(['admin']), register);
router.post('/login', login);
router.get('/me', authenticate, me);

module.exports = router;
