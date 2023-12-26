// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// imports employee constructor
const Employee = require("./Employee");

// class engineer extends employee constructor
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  // returns github from input
  getGithub() {
    return this.github;
  }
  // returns engineer role
  getRole() {
    return "Engineer";
  }
}
// Exports engineer
module.exports = Engineer;
