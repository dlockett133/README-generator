// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    `What is the title of your project?`,
    `A Description of your project?`, 
    `What are the installation instructions (if none, type "N/A")?`, 
    `Usage information?`, 
    `Contribution Guidelines?`, 
    `Test Instructions?`,
    `License?`,
    `Github Username?`,
    `Contact Email?`
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data), (err) => {
        err ? console.log(err) : console.log("Your README.md has been generated")
    })
}

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
                    name: `tests`,
                    message: `${questions[5]}`
                },
                {
                    type: `list`,
                    name: `license`,
                    message: `${questions[6]}`,
                    choices: [`MIT`,'ISC',`GNU GPLv3`]
                    //Add a badge for the license choices
                },
                {
                    type: `input`,
                    name: `username`,
                    message: `${questions[7]}`
                },
                {
                    type: `input`,
                    name: `email`,
                    message: `${questions[8]}`
                },
            ])
            .then((data)=>{
                // console.log(data.description)
                writeToFile("README.md", generateMarkdown(data));
            })
    }

// Function call to initialize app
init();
