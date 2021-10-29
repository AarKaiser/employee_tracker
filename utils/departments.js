// Requiring SQL Server Connection

const { db } = require("../config/connection");
const { mainMenu } = require("./main_menu");
// Function for Viewing Departments

function viewDepts() {
  // console.log("\x1b[32m", "view dept working √");
  let query = "select distinct name from employee_db.departments";
  db.query(query, (err, response) => {
    if (err) throw err;
    else console.log(response);
  });

}

// Function for Adding Department

function addDept() {
  console.log("\x1b[32m", "add dept working √");
  process.exit();
}

module.exports = { viewDepts, addDept };
