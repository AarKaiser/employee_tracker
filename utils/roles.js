const { db } = require("../config/connection");
const inquirer = require("inquirer");
let departmentArray = [];
let employeeArray = [];
let roleArray = [];

function viewRoles() {
  console.log("\x1b[32m", "view role working √");
  let query = "select title from employee_db.roles";
  return db.promise().query(query);
}

function loadDepartments() {
  let query = `select * from departments`;
  return db.promise().query(query);
}

function loadEmployees() {
  let query = "select id, first_name, last_name from employee_db.employees";
  return db.promise().query(query);
}

function loadRoles() {
  let query = `select id, title from employee_db.roles`;
  return db.promise().query(query);
}

async function addRole() {
  let sqlData = await loadDepartments();
  let stringifiedData = JSON.stringify(sqlData[0]);
  console.log(stringifiedData);
  for (i = 0; i < JSON.parse(stringifiedData).length; i++) {
    let newObj = {
      name: JSON.parse(stringifiedData)[i].name,
      value: JSON.parse(stringifiedData)[i].id,
    };
    departmentArray.push(newObj);
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
        choices: departmentArray,
      },
    ])
    .then((answer) => {
      console.log(answer);
      const sql = `
                  insert into roles (title, salary, dept_id)
                  values ("${answer.newTitle}","${answer.newSalary}","${answer.departmentId}")
                  `;
      db.promise().query(sql);
    });
}

// async function updateRole() {
//   let sqlData = await loadEmployees();
//   let sqlData2 = await loadRoles();
//   // console.log(sqlData);
//   // console.log(sqlData2);
//   let stringifiedData2 = JSON.stringify(sqlData[0]);
//   let stringifiedData3 = JSON.stringify(sqlData2[0]);
//   console.log(stringifiedData2);
//   console.log(stringifiedData3);
//   for (i = 0; i < JSON.parse(stringifiedData2).length; i++) {
//     let newObj2 = {
//       first_name: JSON.parse(stringifiedData2)[i].first_name,
//       value: JSON.parse(stringifiedData2)[i].id,
//     };
//     employeeArray.push(newObj2);
//   }
//   for (i = 0; i < JSON.parse(stringifiedData3).length; i++) {
//     let newObj3 = {
//       title: JSON.parse(stringifiedData3)[i].title,
//       // value: JSON.parse(stringifiedData3)[i].id,
//     };
//     roleArray.push(newObj3);
//     console.log(roleArray);
//   }
//   console.log("\x1b[32m", "update role !working √");
//   return inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "updateEmpl",
//         message: "Which employee would you like to update?",
//         choices: employeeArray,
//       },
//       {
//         type: "list",
//         name: "updateRole",
//         message: "What is the employees new role?",
//         choices: roleArray,
//       },
//     ])
//     .then((answer) => {
//       console.log(answer);
//       // const sql = `
//       //             insert into roles (title, salary, dept_id)
//       //             values ("${answer.newTitle}","${answer.newSalary}","${answer.departmentId}")
//       //             `;

//       // db.promise().query(sql);
//     });
// }

async function updateRole() {
  loadEmployees().then(([rows]) => {
    let employees = rows;

    // console.log(employees)
    const choicesNames = employees.map(({ id, first_name, last_name }) => ({
      name: first_name + " " + last_name,
      value: id
    }));

    // console.log(choices)
    inquirer.prompt(
      {
        type: "list",
        name: "selectedEmployee",
        message: "Which employee's role are you updating?",
        choices: choicesNames
      }
    ).then(employeeAnswer => {
      const employeeId =employeeAnswer.selectedEmployee
      loadRoles().then(([rows]) => {
        let titles = rows;
        const choicesTitle = titles.map(({ id, title }) => ({
          name: title,
          value: id
        }));

        inquirer.prompt(
          {
            type: "list",
            name: "selectedRole",
            message: "What is their new role?",
            choices: choicesTitle
          }
        ).then(titleAnswer => {
          const titleId = titleAnswer.selectedRole;
          const sqlString =`
          UPDATE employees
          SET role_id = ?
          WHERE id = ?`

          db.query(sqlString, [titleId, employeeId], (err, data) => {
            if(err) throw err;
            
          })
        })
      })
    })
  })
}

module.exports = { viewRoles, addRole, updateRole };
