// src/controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const SALT_ROUNDS = 10;
const JWT_EXPIRES = '7d';

const register = async (req, res) => {
  try {
    // admin-only: middleware will ensure req.user.role === 'admin'
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: 'name,email,password required' });

    const exists = await User.findOne({ where: { email } });
    if (exists) return res.status(409).json({ error: 'Email already registered' });

    const hashed = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = await User.create({ name, email, password: hashed, role: role || 'user' });

    return res.status(201).json({ message: 'User created', id: newUser.id, email: newUser.email, role: newUser.role });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'email & password required' });

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: JWT_EXPIRES });

    return res.json({
      message: 'Login successful',
      accessToken: token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};

const me = async (req, res) => {
  try {
    const uid = req.user.id;
    const user = await User.findByPk(uid, { attributes: ['id','name','email','role','createdAt'] });
    if (!user) return res.status(404).json({ error: 'User not found' });
    return res.json({ user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { register, login, me };
