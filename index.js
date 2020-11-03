// Add File System and Inquirer for use:
const fs = require('fs');
const inquirer = require('inquirer');
// Add generateMarkdown file for use:
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        // Add Title:
        type: "input",
        name: "title",
        message: "What is the title of your application? (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter the title of your project.");
                return false;
            }
        }
    },
    {
        // Add Description:
        type: "input",
        name: "description",
        message: "Please provide a description of your application (include your motivation for building it). (Required)",
        validate: descriptInput => {
            if (descriptInput) {
                return true;
            } else {
                console.log("Please enter a description of your project.");
                return false;
            }
        }
    },
    {
        // Add Installation instructions:
        type: "input",
        name: "install",
        message: "Please provide instructions on how to install your application. Include dependencies that are required.",
        default: "Run npm install in your terminal."
    },
    {
        // Add Usage section:
        type: "input",
        name: "usage",
        message: "Please provide instructions and examples of how to use your application."
    },
    {
        // Add License section (append badge to top):
        type: "list",
        name: "license",
        message: "What license is your application covered under?",
        choices: [
            'MIT',
            'Apache 2.0',
            'MPL 2.0',
            'GPL 2.0',
            'None'
        ]
    },
    {
        // Add Contributing guidelines:
        type: "input",
        name: "contribute",
        message: "Provide guidelines on how someone can participate in development."

    },
    {
        // Add Test(s) instructions:
        type: "input",
        name: "tests",
        message: "Provide instructions for testing application.",
        default: "Run 'npm test' in your terminal."

    },
    // Add Questions/Contact section:
    {
        type: "input",
        name: "github",
        message: "What is your Github user name? (Required)",
        valideate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your github user name.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Your ReadMe.MD has been generated!")
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((responses) => {
            writeToFile("README.md", generateMarkdown({...responses}));
            console.log("ReadMe file complete!")
        })
}

// function call to initialize program
init();
