// Requirements

const inquirer = require("inquirer");
const { viewDepts, addDept } = require("./departments");
const { viewEmployees, addEmployee } = require("./employees");
const { viewRoles, addRole, updateEmployeeRole } = require("./roles");


// Main Menu Questions
const questions = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "menuchoices",
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

//  Main Menu Navigation Function

function mainMenu() {
  //   console.log("\x1b[32m", "\nSucessfully accessed Main Menu √");
  inquirer.prompt(questions).then((answer) => {
    const navigate = answer.menuchoices;
    switch (navigate) {
      case "View All Departments":
        // console.log("view all dept selected");
        viewDepts();
        break;
      case "View All Roles":
        viewRoles();
        break;
      case "View All Employees":
        viewEmployees();
        break;
      case "Add a Department":
        addDept();
        break;
      case "Add a Role":
        addRole();
        break;
      case "Add an Employee":
        addEmployee();
        break;
      case "Update An Employee Role":
        updateEmployeeRole();
        break;
      default:
        process.exit();
    }
  });
}

module.exports = { mainMenu };
