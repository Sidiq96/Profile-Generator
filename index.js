const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// Empty array for team
let team = [];

// array of questions for manager
const managerQuestions = [
  {
    type: "input",
    message: "What is your Team manager's name: ?",
    name: "name",
  },
  { type: "input", message: "What's Team manager's ID number?: ", name: "ID" },
  { type: "input", message: "What's Team manager's email?: ", name: "Email" },
  {
    type: "input",
    message: "What's Team manager's office number?: ",
    name: "Office",
  },
];

// array of questions for engineer
const engineerQuestions = [
  { type: "input", message: "What is your Engineer's name? :", name: "name" },
  { type: "input", message: "What's Engineer's ID number? :", name: "ID" },
  { type: "input", message: "What's Engineer's email? :", name: "Email" },
  { type: "input", message: "What's Engineer's Github? :", name: "Github" },
];

// array of questions for intern
const internQuestions = [
  { type: "input", message: "What is your Intern's name?: ", name: "name" },
  { type: "input", message: "What's Intern's ID number?: ", name: "ID" },
  { type: "input", message: "What's Intern's email?: ", name: "Email" },
  { type: "input", message: "What's Intern's school?: ", name: "School" },
];

const addTeamMember = [
  {
    type: "list",
    message: "Please add team members?: ",
    name: "addMember",
    choices: ["Engineer", "Intern", "none"],
  },
];

function addManager() {
  inquirer.prompt(managerQuestions).then((response) => {
    team.push(
      new Manager(response.name, response.ID, response.Email, response.Office)
    );
    // Call promptTeamMember after adding the manager
    addEngineer();
  });
}

function addEngineer() {
  inquirer.prompt(engineerQuestions).then((response) => {
    team.push(
      new Engineer(response.name, response.ID, response.Email, response.Github)
    );
    addIntern();
  });
}

function addIntern() {
  inquirer.prompt(internQuestions).then((response) => {
    team.push(
      new Intern(response.name, response.ID, response.Email, response.School)
    );
    promptTeamMember();
  });
}
function promptTeamMember() {
  inquirer.prompt(addTeamMember).then((response) => {
    switch (response.addMember) {
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      default:
        // If 'none' is selected, generate the HTML and write to file
        const html = render(team);
        writeToFile("./output/team.html", html);
        break;
    }
  });
}

function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Start the process by adding the manager
addManager();
