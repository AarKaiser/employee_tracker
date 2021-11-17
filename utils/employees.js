const { db } = require("../config/connection");
const inquirer = require("inquirer")

// Function for Viewing Employees

function viewEmployees() {
  console.log("\x1b[32m", "view employees working √");
  let query = `
  select employees.first_name as "First Name", employees.last_name as Last_Name, title as Title, salary as Salary, name as Department_Name, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
  from employee_db.employees
  join roles 
  on role_id = roles.id
  join departments
  on dept_id = departments.id
  join employees manager
  on manager.id = employees.manager_id`;
  return db.promise().query(query);
}

function addEmployee() {
    console.log("\x1b[32m", "add employees working √");
    return inquirer
    .prompt([
      {
        type: "input",
        name: "newEmpFN",
        message: "What is the first name of the new employee?",
      },
      {
        type: "input",
        name: "newEmpLN",
        message: "What is the last name of the new employee?",
      },
      {
        type: "input",
        name: "newEmpRI",
        message: "What is the role of the new employee?",
      },
      {
        type: "input",
        name: "newEmpMI",
        message: "What is the new employee's Manager's ID?",
      },
    ])
    .then((answer) => {
      const sql = `
                  insert into employees (first_name, last_name, role_id, manager_id)
                  values ("${answer.newEmpFN}", "${answer.newEmpLN}","${answer.newEmpRI}","${answer.newEmpMI}")`;
      db.query(sql, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
  })
})
}

module.exports = { viewEmployees, addEmployee };