const { db } = require("../config/connection");
const inquirer = require("inquirer")

// Function for Viewing Employees

function viewEmployees() {
  console.log("\x1b[32m", "view employees working √");
  let query = `
  select first_name, last_name, title, salary, name AS department_name
  from employee_db.employees
  join roles 
  on role_id = roles.id
  join departments
  on dept_id = departments.id`;
  return db.promise().query(query);
}

function addEmployee() {
    console.log("\x1b[32m", "add employees working √");
    inquirer
    .prompt([
      {
        type: "input",
        name: "department_name",
        message: "What is the name of the new employee?",
      },
    ])
    .then((answer) => {
      const sql = `
                  insert into departments (name)
                  values ("${answers.department_name}")`;
      db.query(sql, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
    let query = "select distinct name from employee_db.employees";
    return db.promise().query(query);
  })
})
}

module.exports = { viewEmployees, addEmployee };