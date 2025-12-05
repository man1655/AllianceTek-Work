const { Sequelize } = require("sequelize");

// Initialize SQLite connection
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./hr_practice.sqlite", // SQLite database file
  logging: false, // turn off SQL logging for now
});

module.exports = sequelize;
