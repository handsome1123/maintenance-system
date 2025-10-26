// src/controllers/machineController.js
const { Machine } = require('../models');

const listMachines = async (req, res) => {
  try {
    const machines = await Machine.findAll({ order: [['id','ASC']] });
    return res.json({ machines });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};

const createMachine = async (req, res) => {
  try {
    // admin-only
    const { code, name, location, description } = req.body;
    if (!code || !name) return res.status(400).json({ error: 'code & name required' });

    const exists = await Machine.findOne({ where: { code } });
    if (exists) return res.status(409).json({ error: 'Machine code already exists' });

    const machine = await Machine.create({ code, name, location, description });
    return res.status(201).json({ message: 'Machine created', machine });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { listMachines, createMachine };
