// src/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { sequelize } = require('./models'); // models/index exports sequelize
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const machineRoutes = require('./routes/machineRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/machines', machineRoutes);

// health
app.get('/', (req, res) => res.json({ message: 'API running' }));

const PORT = process.env.PORT || 4000;

(async () => {
  try {
    // sync database models
    await sequelize.sync({ alter: true });
    console.log('✅ Database synced');

    app.listen(PORT, () => {
      console.log(`✅ Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Failed to start server:', err);
  }
})();
