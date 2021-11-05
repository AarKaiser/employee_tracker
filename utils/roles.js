const { db } = require("../config/connection");

function viewRoles() {
    console.log("\x1b[32m", "view role working √");
    let query = "select title from employee_db.roles";
    return db.promise().query(query);
  }

  function addRole() {
    console.log("\x1b[32m", "add role working √");
    process.exit();
  }

  function updateRole() {
    console.log("\x1b[32m", "update role working √");
    process.exit();
  }


  module.exports = { viewRoles, addRole, updateRole };