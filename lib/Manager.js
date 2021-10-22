const Employee = require('./Employee');

// Takes initial parameters from employee constructor and adds role specific params
class Manager extends Employee {
    constructor (name, id, email, office) {
        super(name, id, email);

        this.office = office;
    }

    Office() {
        return this.office;
    }

    getRole() {
        return "Manager";
    }
};

module.exports = Manager;