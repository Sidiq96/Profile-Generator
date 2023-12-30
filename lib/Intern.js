// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// imports employee constructor
const Employee = require("./Employee");
// class intern extends employee constructor
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  //    returns school from input
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
// exports intern
module.exports = Intern;
