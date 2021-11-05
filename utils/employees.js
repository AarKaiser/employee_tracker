const { db } = require("../config/connection");

// Function for Viewing Employees

function viewEmployees() {
  console.log("\x1b[32m", "view employees working √");
  let query = "select first_name from employee_db.employees";
  return db.promise().query(query);
}

function addEmployee() {
    console.log("\x1b[32m", "add employees working √");
    let query = "select distinct name from employee_db.employees";
    return db.promise().query(query);
  }

module.exports = { viewEmployees, addEmployee };