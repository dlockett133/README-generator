// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    `What is the title of your project?`,
    `A Description of your project?`, 
    `What are the installation instructions (if none, type "N/A")?`, 
    `Usage information?`, 
    `Contribution Guidelines?`, 
    `Test Instructions?`
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
        // console.log(questions[0])
        inquirer
            .prompt([
                {
                    type: `input`,
                    name: `title`,
                    message: `${questions[0]}`
                },
                {
                    type: `input`,
                    name: `description`,
                    message: `${questions[1]}`
                },
                {
                    type: `input`,
                    name: `installation`,
                    message: `${questions[2]}`
                },
                {
                    type: `input`,
                    name: `usage`,
                    message: `${questions[3]}`
                },
                {
                    type: `input`,
                    name: `contributions`,
                    message: `${questions[4]}`
                },
                {
                    type: `input`,
                    name: `test`,
                    message: `${questions[5]}`
                },
                {
                    type: `list`,
                    name: `license`,
                    message: `License?`,
                    choices: [`MIT`,'ISC',`GNU GPLv3`]
                }
            ])
            .then((data)=>{
                console.log(data)
            })
    }

// Function call to initialize app
init();
