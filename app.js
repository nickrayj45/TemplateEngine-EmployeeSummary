const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const holdInfo = [];


const render = require("./lib/htmlRenderer");

function userQuestions() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What kind of employee would you like to create?",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Finished making users",
            ]
        })
        .then(function (answer) {
            console.log(answer)
            switch (answer.action) {
                case "Manager":
                    createManager();
                    break;
                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                case "Finished making users":
                    createFinished();
                    break;
            }
        });
}

function createManager() {
    inquirer
        .prompt(
            [
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the name of the employee?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the employee's email?"
                },

                {
                    type: 'input',
                    name: 'id',
                    message: "What is the employee's ID?"
                },

                {
                    type: 'input',
                    name: 'office_number',
                    message: "What is the manager's office number?"
                }
            ]
        )
        .then(function (answer) {
            const newManager = new Manager(answer.name, answer.id, answer.email, answer.office_number)
            console.log(newManager)
            holdInfo.push(newManager)
            userQuestions();
        })
}

function createEngineer() {
    inquirer
        .prompt(
            [
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the name of the employee?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the employee's email?"
                },

                {
                    type: 'input',
                    name: 'id',
                    message: "What is the employee's ID?"
                },

                {
                    type: 'input',
                    name: 'github',
                    message: "What is the engineer's github username?"
                }
            ]
        )
        .then(function (answer) {
            const newEngineer = new Engineer(answer.name, answer.id, answer.email, answer.github)
            console.log(newEngineer)
            holdInfo.push(newEngineer)
            userQuestions();
        })
}

function createIntern() {
    inquirer
        .prompt(
            [
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the name of the employee?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the employee's email?"
                },

                {
                    type: 'input',
                    name: 'id',
                    message: "What is the employee's ID?"
                },

                {
                    type: 'input',
                    name: 'school',
                    message: "What school did the intern attend"
                }
            ]
        )
        .then(function (answer) {
            const newIntern = new Intern(answer.name, answer.id, answer.email, answer.school)
            console.log(newIntern)
            holdInfo.push(newIntern)
            userQuestions();
        })
}
// Function that allows the content to be displayed in html format
function createFinished() {
    let html = render(holdInfo)
    fs.writeFile("main.html", html, function (err) {
        console.log(err);

    })
}

userQuestions();
// module.exports = main.html;





// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
