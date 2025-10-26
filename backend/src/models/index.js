// src/models/index.js
const sequelize = require('../config/database');
const User = require('./User');
const Machine = require('./Machine');

// Associate models here if needed
// e.g., User.hasMany(Request), etc.

module.exports = {
  sequelize,
  User,
  Machine,
};
