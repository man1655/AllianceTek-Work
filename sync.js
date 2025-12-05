const { sequelize, Employee, Department } = require("./models/index.js");

async function syncDatabase() {
  await sequelize.sync({ force: true }); 
  console.log("Database synced!");
  
  const hr = await Department.create({ name: "HR", budget: 100000 });
  const it = await Department.create({ name: "IT", budget: 150000 });

  await Employee.create({ name: "Alice", position: "Manager", salary: 5000, hire_date: "2025-01-10", department_id: hr.id, performance_score: 8 });
  await Employee.create({ name: "Bob", position: "Developer", salary: 4000, hire_date: "2025-02-15", department_id: it.id, performance_score: 9 });

  console.log("Seed data added!");
}

syncDatabase();
