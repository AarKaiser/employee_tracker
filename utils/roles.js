const { db } = require("../config/connection");
const inquirer = require("inquirer")
let departmentArray = [];

function viewRoles() {
    console.log("\x1b[32m", "view role working √");
    let query = "select title from employee_db.roles";
    return db.promise().query(query);
  }

function loadDepartments() {
  let query = `SELECT * FROM departments`
  return db.promise().query(query)
}

  async function addRole() {
    let sqlData = await loadDepartments()
    let stringifiedData = JSON.stringify(sqlData[0])
    for(i=0; i< JSON.parse(stringifiedData).length; i++) {
      const newObj = {
        name: JSON.parse(stringifiedData)[i].name,
        value: JSON.parse(stringifiedData)[i].id
      }
      departmentArray.push(newObj)
    }
    console.log("\x1b[32m", "add role working √");
    return inquirer
    .prompt([
      {
        type: "input",
        name: "newTitle",
        message: "What is the name of the new Role?",
      },
      {
        type: "input",
        name: "newSalary",
        message: "What is the Salary of the new Role?",
      },
      {
        type: "list",
        name: "departmentId",
        message: "Which department does this belong to?",
        choices: departmentArray
      },
    ])
    .then((answer) => {
      console.log(answer)
      // const sql = `
      //             insert into departments (name)
      //             values ("${answer.newDept}")`;
      // db.promise().query(sql)
    })
  }

  function updateRole() {
    console.log("\x1b[32m", "update role working √");
    process.exit();
  }


  module.exports = { viewRoles, addRole, updateRole };