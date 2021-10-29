const inquirer = require("inquirer");
const {viewDepts, addDept} = require("./departments");
const {viewEmployees, addEmployee, updateEmployee} = require("./employees");
const {viewRole, addRole} = require("./roles")

const questions = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "menuchoice",
    choices: [
      "View All Departments",
      "View All Roles",
      "View All Employees",
      "Add a Department",
      "Add a Role",
      "Add an Employee",
      "Update An Employee Role",
      "Exit Team Tracker",
    ],
  },
];

function mainMenu() {
//   console.log("\x1b[32m", "\nSucessfully accessed Main Menu √");
  inquirer.prompt(questions).then((answers) => {
    if (answers.choices === "View All Departments") {
        
    } else if (answers.choices === "View All Roles") {
        console.log("view roles");
    } else {
        process.exit();
    }
    
  });
 
}

module.exports = { mainMenu };
