const inquirer = require("inquirer");
const render = require("./lib/htmlRenderer.js")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const fs = require("fs")
const util = require("util")
// const Intern = require("./lib/Intern")
const holdInfo = [];



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
            console.log(holdInfo)
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
            const manager = new Manager(answer.name, answer.id, answer.email, answer.office_number)
            console.log(manager)
            holdInfo.push(manager)
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
                    name: 'gitHubUserName',
                    message: "What is the engineer's github username?"
                }
            ]
        )
        .then(function (answer) {
            const engineer = new Engineer(answer.name, answer.id, answer.email, answer.gitHubUserName)
            console.log(engineer)
            holdInfo.push(engineer)
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
            const intern = new Intern(answer.name, answer.id, answer.email, answer.school)
            console.log(intern)
            holdInfo.push(intern)
            userQuestions();
        })
}
// Function that allows the content to be displayed in html format
function createFinished (){
    let html = render(holdInfo) 
    fs.writeFile("main.html", html, function(err){
        console.log(err);
        
    })
}

userQuestions();





