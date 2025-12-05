import { Employee,Department, sequelize } from "./models/index.js";
import { Op, where } from "sequelize";
// const employees=await Employee.findAll({
//   include:[Department]
// })
// employees.forEach((emp)=>(
//   console.log(emp.toJSON())
// ))


// const deptcount=await Employee.findAll(
//   {
//     attributes:[
//       'department_id',
//     [sequelize.fn('COUNT',sequelize.col('id')),'employee_count']
//     ],
//     group:['department_id']
//   }
// )
// deptcount.map((dept)=>console.log(dept.toJSON()))


// const Recent=await Employee.findAll({
//   where:{
//     hire_date:{
//       [Op.gt]:'2025-01-01'
//     }
//   }
// })
// Recent.map(async(emp)=>  console.log(
//   emp.name,
//   emp.hire_date,
//   emp.department_id,
//   emp.position
// ))



// const avgsalary=await Employee.findAll({
//   attributes:[
//     'department_id',
//     [sequelize.fn('AVG',sequelize.col('salary')),'average_salary']
//   ],
//   group:['department_id']
// })

// avgsalary.map((dept)=>console.log(dept.toJSON()))


// const maxSalary=await Employee.max('salary')
// // console.log(maxSalary)

const first_day=new Date(new Date().getFullYear(),new Date().getMonth(),1);
const last_day=new Date(new Date().getFullYear(),new Date().getMonth()+1,0)
// console.log(first_day.tol,last_day)


// const hired_employee=await Employee.findAll(
//   {
//     attributes:[
//       'id',
//       'name',
//       'hire_date'
//     ],
//     where:{
//       hire_date:{
//         [Op.between]:[first_day,last_day]
//       }
//     }
//   }
// )
// console.log(hired_employee);


// const employee=await Employee.findAll(
//   {
//     attributes:[
//       'name','position','salary'
//     ],
//     order:[['salary','DESC']],
//     limit:3
//     }
// )
// console.log(employee)



  // Average salary of IT department:


//   const department=await Employee.findAll({
//     include:[
//       {
//         model:Department,
//         where:{
//           name:'IT'
//         },
//      attributes:[
//       'name',
//       'id',
//       'budget'
//      ]
//       }
//     ],
//     attributes:[
//       'name',
//       [sequelize.fn('AVG',sequelize.col('salary')),'average_salary']
//     ]
//   })

// department.map((dept)=>console.log(dept.toJSON()))

// const report=await Employee.findAll({include:'Department'})
// console.table(
//   report.map((emp)=>({
//     Name:emp.name,
//     Position:emp.position,
//     Salary:emp.salary,
//     Department:emp.Department.name
//   }
//   )
// )
// )
// await Employee.update(
//   {
//     hire_date:new Date()
//   },{
//   where:{
//     name:'Alice'
//   }
// }
// )

// const startMonth=new Date(new Date().getFullYear(),new Date().getMonth(),1);
// const endMonth=new Date(new Date().getFullYear(),new Date().getMonth()+1,0);

// // Monthly New Hires Report

// const employee=await Employee.findAll(
//   {
//     attributes:[
//       'name',
//       'position',
//       'hire_date'
//    ],
//    include:[{
//     model:Department,
//     attributes:['name']
//    }],
//    where:{
//     hire_date:{
//       [Op.between]:[startMonth,endMonth]
//     }
//    }
//   }
// )
// console.table(
//   employee.map(e => ({
//     Name: e.name,
//     Position: e.position,
//     HireDate: e.hire_date,
//     Department: e.Department?.name
//   }))
// );

await Employee.bulkCreate([
  {
    name: "Aisha Khan",
    position: "Developer",
    salary: 55000,
    hire_date: "2024-08-21",
    department_id: 1
  },
  {
    name: "Manoj Patel",
    position: "Developer",
    salary: 40000,
    hire_date: "2024-09-02",
    department_id: 1
  },
  {
    name: "Neha Gupta",
    position: "HR",
    salary: 30000,
    hire_date: "2024-05-15",
    department_id: 2
  },
  {
    name: "Arjun Verma",
    position: "HR",
    salary: 45000,
    hire_date: "2024-07-13",
    department_id: 2
  }
]);


// Employees with Below-Average Salary (Retention Risk)

const retentionRisk = await Employee.findAll({
  attributes: [
    'name',
    'position',
    'salary',
    [
      sequelize.literal(`
        (
          SELECT AVG(e2.salary)
          FROM Employees AS e2
          WHERE e2.position = Employee.position
        )
      `),
      'avg_salary'
    ]
  ],
  where: sequelize.literal(`
    salary < (
      SELECT AVG(e2.salary)
      FROM Employees AS e2
      WHERE e2.position = Employee.position
    )
  `),
  order: [['position', 'ASC']]
});

console.table(retentionRisk.map(e => e.toJSON()));





