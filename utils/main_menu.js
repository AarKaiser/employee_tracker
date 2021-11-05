// Requirements

const inquirer = require("inquirer");
const { viewDepts, addDept } = require("./departments");
const { viewEmployees, addEmployee } = require("./employees");
const { viewRoles, addRole, updateRole } = require("./roles");


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

//  Main Menu Function

const mainMenu = () => {
  //   console.log("\x1b[32m", "\nSucessfully accessed Main Menu √");
  inquirer.prompt(questions).then(async (answer) => {
    const navigate = answer.menuchoices;
    switch (navigate) {
      case "View All Departments":
        // console.log("view all dept selected");
        const departments =  await viewDepts();
        console.log("\n")
        console.log("\x1b[33m", "Here are all the departments:");
        console.log("\x1b[37m", "\n")
        console.table(departments[0]);
        mainMenu()
        break;
      case "View All Roles":
        const roles =  await viewRoles();
        console.log("\n")
        console.log("\x1b[33m", "Here are all the roles:");
        console.log("\x1b[37m", "\n")
        console.table(roles[0]);
        mainMenu()
        break;
      case "View All Employees":
        const employees =  await viewEmployees();
        console.log("\n")
        console.log("\x1b[33m", "Here are all the employees:");
        console.log("\x1b[37m", "\n")
        console.table(employees[0]);
        mainMenu()
        break;
      case "Add a Department":
        const departments_2 =  await addDept();
        console.log("\n")
        console.log("\x1b[33m", "You have sucessfully added the department:");
        console.log("\x1b[37m", "\n")
        console.table(departments[0]);
        mainMenu()
        break;
      case "Add a Role":
        const roles_2 =  await addRole();
        console.log("\n")
        console.log("\x1b[33m", "You have successfully added the role:");
        console.log("\x1b[37m", "\n")
        console.table(roles[0]);
        mainMenu()
        break;
      case "Add an Employee":
        const employees_2 =  await addEmployee();
        console.log("\n")
        console.log("\x1b[33m", "You have succesffully added the employee:");
        console.log("\x1b[37m", "\n")
        console.table(employees[0]);
        mainMenu()
        break;
      case "Update An Employee Role":
        const roles_3 =  await updateRole();
        console.log("\n")
        console.log("\x1b[33m", "You have successfully updated the role:");
        console.log("\x1b[37m", "\n")
        console.table(roles[0]);
        mainMenu()
        break;
      default:
        process.exit();
    }
  });
}

module.exports = mainMenu;
