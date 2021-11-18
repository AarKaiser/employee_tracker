// Requiring SQL Server Connection

const { db } = require("../config/connection");
const inquirer = require("inquirer")

// Function for Viewing Departments

function viewDepts() {
  console.log("\x1b[32m", "view dept working √");
  let query = `select distinct name as "Departments"from employee_db.departments`;
  return db.promise().query(query);
}

// Function for Adding Department

function addDept() {
  console.log("\x1b[32m", "add dept working √");
  return inquirer
    .prompt([
      {
        type: "input",
        name: "newDept",
        message: "What is the name of the new department?",
      },
    ])
    .then((answer) => {
      const sql = `
                  insert into departments (name)
                  values ("${answer.newDept}")`;
      db.promise().query(sql)
    })
  // process.exit();
}

module.exports = { viewDepts, addDept, };
