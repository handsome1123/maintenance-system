// src/controllers/userController.js
const { User } = require('../models');

const listUsers = async (req, res) => {
  try {
    // admin-only: middleware should check role
    const users = await User.findAll({ attributes: ['id','name','email','role','createdAt'] });
    return res.json({ users });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { listUsers };
