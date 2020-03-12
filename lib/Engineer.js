// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");

// Create questions to prompt the user questions about name, id, position, etc
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the name of the employee?"
    },
    {
        type: 'input',
        name: 'position',
        message: "What's the employee's position?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's ID?"
    },
    {
        type: 'input',
        name: 'github_username',
        message: "What is engineer's GitHub username?"
    },
]
function generateHTML(userResponse){
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    {{ team }}
                    <li> ${userResponse.name} </li>
                    <li> ${userResponse.position} </li>
                    <li> ${userResponse.id} </li>
                    <li> ${userResponse.github_username} </li>
                </div>
            </div>
        </div>
    </body>
    
    </html>
    `;
}

// Asynchronus Function
inquirer.prompt(questions)
.then(userResponse => {


axios.get(questions)
    .then(function(response){
       
        
        fs.writeFile("main.html", html(userResponse, response), function (err) {
            if (err) {
              throw err;
            }

    })
});
})