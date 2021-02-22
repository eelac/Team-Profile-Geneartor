const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const path = require("path");

const teamMembers = [];

function app() {
  function chooseEmployee() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "chooseEmployee",
          message: "Which employee are you adding?",
          choices: ["Manager", "Engineer", "Intern", "No more team members"],
        },
      ]).then((userChoice) => {
        switch (userChoice.chooseEmployee) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            combine();
        }
      });
  }

  function addManager() {
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the manager's id?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email?",
      },
      {
        type: "input",
        name: "managerOffice",
        message: "What is the manager's office number?",
      },
    ]).then(answers => {
      const manager = new Manager(answers.mangerName, answers.managerId, answers.managerEmail, answers.managerOffice);
      teamMembers.push(manager);
      chooseEmployee();
    })
  }

  function addEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's id?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's Github?",
      },
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamMembers.push(engineer);
      chooseEmployee();
    })
  }

  function addIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is the intern's id?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "Where school did the intern study at?",
      },
    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamMembers.push(intern);
      chooseEmployee();
    })
  }

  chooseEmployee();

}

app();
