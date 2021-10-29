// Requiring Server Connection

const db = require("../config/connection")

// Function for Viewing Departments

function viewDepts() {
  console.log("\x1b[32m", "view dept working");

}

// Function for Adding Department

function addDept(){
    console.log ("\x1b[32m", "add dept working")
    process.exit();
}

module.exports = { viewDepts, addDept };