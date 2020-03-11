const inquirer = require("inquirer");

// Create questions to prompt the user questions about name, id, position, etc
const questions = [
    {
        {
        type: "input",
        name: "name",
        message: "what is the employee's name?",
    }
        {
        type: "input",
        name: "position",
        message: "what is the employee's position?",
    }
        {
        type: "input",
        name: "id",
        message: "what is the employee's ID?",
    }
    }
]