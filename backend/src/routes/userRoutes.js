// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { listUsers } = require('../controllers/userController');
const { authenticate, authorizeRole } = require('../middlewares/authMiddleware');

router.get('/', authenticate, authorizeRole(['admin']), listUsers);

module.exports = router;
