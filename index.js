// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
// const questions = [`What is the title of your project?`,`A Description of your project?`, `What are the installation instructions (if none, type "N/A")?`, `Usage information?`, `Contribution Guidelines?`, `Test Instructions?`];
const questions = {
    "title":`What is the title of your project?`,
    "description":`A Description of your project?`,
    "installation": `What are the installation instructions (if none, type "N/A")?`,
    "usage": `Usage information?`, 
    "contributions":`Contribution Guidelines?`,
    "test": `Test Instructions?`
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    for(const question in questions){
        // console.log(question)
        inquirer
            .prompt([
                {
                    type: `${question}`,
                    name: `${question}`,
                    message: ``
                }
            ])
    }
}

// Function call to initialize app
init();
