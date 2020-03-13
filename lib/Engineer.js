// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHubUserName) {
    super(name, id, email);
    this.gitHubUserName = gitHubUserName;
  }

  getRole() {
    return "Engineer"
    
}
    getGithub(){
        return this.gitHubUserName;
    }
  
}
 
module.exports = Engineer;
