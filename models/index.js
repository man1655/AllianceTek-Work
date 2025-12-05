const sequelize = require("../database");
const Employee = require("./Employee");
const Department = require("./Department");

// Add other models later...

module.exports = {
  sequelize,
  Employee,
  Department,
};