const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Department = require("./Department");

const Employee = sequelize.define("Employee", {
  name: { type: DataTypes.STRING, allowNull: false },
  position: { type: DataTypes.STRING },
  salary: { type: DataTypes.FLOAT },
  hire_date: { type: DataTypes.DATEONLY },
  departure_date: { type: DataTypes.DATEONLY, allowNull: true },
  performance_score: { type: DataTypes.INTEGER, defaultValue: 0 },
});

Employee.belongsTo(Department, { foreignKey: "department_id" });
Department.hasMany(Employee,{foreignKey: "department_id"})

module.exports = Employee;