const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Department = sequelize.define("Department", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  budget: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
});

module.exports = Department;
