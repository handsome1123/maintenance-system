// src/seedAdmin.js
require('dotenv').config();
const bcrypt = require('bcrypt');
const { sequelize, User } = require('./models');

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    const email = process.env.INIT_ADMIN_EMAIL || 'admin@example.com';
    const password = process.env.INIT_ADMIN_PASS || 'Admin@123';
    const exists = await User.findOne({ where: { email } });
    if (exists) return console.log('Admin already exists:', email);

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name: 'Initial Admin', email, password: hashed, role: 'admin' });
    console.log('Created admin:', user.email);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
