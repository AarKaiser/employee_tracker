const db = require("../config/connection")

function viewDepts() {
  console.log("\x1b[32m", "view dept working");
  
}

function addDept(){
    console.log ("\x1b[32m", "add dept working")
    process.exit();
}

module.exports = { viewDepts, addDept };