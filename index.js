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
  { type: "input", message: "What is your Team manager's name?", name: "name" },
  { type: "input", message: "What's Team manager's ID number?", name: "ID" },
  { type: "input", message: "What's Team manager's email?", name: "Email" },
  {
    type: "input",
    message: "What's Team manager's office number?",
    name: "Office",
  },
];
// array of questions for engineer
const engineerQuestions = [
  { type: "input", message: "What is your Engineer's name?", name: "name" },
  { type: "input", message: "What's Engineer's ID number?", name: "ID" },
  { type: "input", message: "What's Engineer's email?", name: "Email" },
  { type: "input", message: "What's Engineer's Github", name: "Github" },
  // array of questions for intern
];
const internQuestions = [
  { type: "input", message: "What is your Intern's name?", name: "name" },
  { type: "input", message: "What's Intern's ID number?", name: "ID" },
  { type: "input", message: "What's Intern's email?", name: "Email" },
  { type: "input", message: "What's Intern's school?", name: "School" },
];

const addTeamMember = [
  {
    type: "list",
    message: "Please add team members?",
    name: "addMember",
    choices: ["Engineer", "Intern", "none"],
  },
];
