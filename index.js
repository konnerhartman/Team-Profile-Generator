const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generatePage = require('./src/generateHTML.js');
let employeeArray = [];

const role =  [ 
    {
        type: 'list',
        name: 'role',
        message: 'What is the next employees role?',
        choices: ['Engineer', 'Intern', 'Exit']
    }
];

const employee = {
Manager: [            
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of this manager?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the ID of this manager?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of this manager?',
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is this managers office number?',
    }
],

Engineer: [            
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of this engineer?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the ID of this engineer?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of this engineer?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is this engineers Github username??',
    },
    {
        type: 'list',
        name: 'addnew',
        message: 'Would you like to add another member?',
        choices: ['Yes', 'No']
    }
],

Intern: [            
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of this intern?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the ID of this intern?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of this intern?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school does this intern attend?',
    },
    {
        type: 'list',
        name: 'addnew',
        message: 'Would you like to add another member?',
        choices: ['Yes', 'No']
    }
]};
    
function addTeam () {
    inquirer.prompt(employee.Manager)
    .then(answer => {
        const newManager = new Manager
            (
                answer.name,
                answer.id,
                answer.email,
                answer.office
            );
        employeeArray.push(newManager);
        addNewMember();
    })
};

function addNewMember () {
    inquirer.prompt(role)
    .then(answer => {
        if (answer.role === 'Engineer') {
            inquirer.prompt(employee.Engineer)
            .then(answer => {
                const engineer = new Engineer
                    (
                        answer.name,
                        answer.id,
                        answer.email,
                        answer.github
                    )
                employeeArray.push(engineer);
                if (answer.addnew === 'Yes') {
                    addNewMember();
                } else {
                    writeHTML(employeeArray);
                }
            })
        } else if (answer.role === 'Intern') {
            inquirer.prompt(employee.Intern)
            .then(answer => {
                const newIntern = new Intern
                    (
                        answer.name,
                        answer.id,
                        answer.email,
                        answer.school
                    )
                employeeArray.push(newIntern);
                console.log(employeeArray);
                if (answer.addnew === 'Yes') {
                    addNewMember();
                } else {
                    writeHTML(employeeArray);
                }
            })
        } else {
            writeHTML(employeeArray);
        }
    })
};

addTeam() 

function writeHTML(employeeArray) {
    fs.writeFileSync('index.html', generatePage(employeeArray), (err) =>
    err ? console.log(err) : console.log('Successfuly created a Team Page!')
)};

