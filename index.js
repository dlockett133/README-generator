// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        name: `title`,
        message: `What is the title of your project?`
    },
    {
        type: `input`,
        name: `description`,
        message: `A Description of your project?`
    },
    {
        type: `input`,
        name: `installation`,
        message: `What are the installation instructions (if none, type "N/A")?`
    },
    {
        type: `input`,
        name: `usage`,
        message: `Usage information?`
    },
    {
        type: `input`,
        name: `contributions`,
        message: `Contribution Guidelines?`
    },
    {
        type: `input`,
        name: `tests`,
        message: `Test Instructions?`
    },
    {
        type: `list`,
        name: `license`,
        message: `License?`,
        choices: [`MIT`,'ISC',`GNU GPLv3`]
        //Add a badge for the license choices
    },
    {
        type: `input`,
        name: `username`,
        message: `Github Username?`
    },
    {
        type: `input`,
        name: `email`,
        message: `Contact Email?`
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,(data), (err) => {
        err ? console.log(err) : console.log("Your README.md has been generated")
    })
}

// TODO: Create a function to initialize app
function init() {
        // console.log(questions[0])
        inquirer.prompt(questions)
            .then((data)=>{
                // console.log(data.description)
                const markdown = generateMarkdown(data)
                console.log(markdown)
                writeToFile("README.md", markdown);
            })
    }

// Function call to initialize app
init();
