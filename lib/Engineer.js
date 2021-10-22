const Employee = require('./Employee');

// Takes initial parameters from employee constructor and adds role specific params
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
};

module.exports = Engineer;