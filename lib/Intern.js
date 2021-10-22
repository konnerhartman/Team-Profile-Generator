const Employee = require('./Employee');

// Takes initial parameters from employee constructor and adds role specific params
class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
};

module.exports = Intern;