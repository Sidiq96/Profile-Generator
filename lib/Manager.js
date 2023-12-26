// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// manager constructor extends the employee constructor
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  // this overrides employee role to manager
  getRole() {
    return "Manager";
  }
}

// this exports the manager js file
module.exports = Manager;
