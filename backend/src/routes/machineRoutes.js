// src/routes/machineRoutes.js
const express = require('express');
const router = express.Router();
const { listMachines, createMachine } = require('../controllers/machineController');
const { authenticate, authorizeRole } = require('../middlewares/authMiddleware');

router.get('/', authenticate, listMachines); // any authenticated user can view machines
router.post('/', authenticate, authorizeRole(['admin']), createMachine); // only admin create

module.exports = router;
