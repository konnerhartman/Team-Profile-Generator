const Employee = require('../lib/Employee.js');

describe('Employee', () => {
    describe('name', () => {
        it('should set name using constructor function', () => {
            const name = "Konner Hartman";
            const employee = new Employee(name);
            expect(employee.name).toBe(name);
        });
    });

    describe('id', () => {
        it('should set id using constructor function', () => {
            const id = "1";
            const employee = new Employee("Konner Hartman", id, "konner.hartman@yahoo.com");
            expect(employee.id).toBe(id);
        });
    });

    describe('email', () => {
        it('should set email using constructor function', () => {
            const email = "konner.hartman@yahoo.com";
            const employee = new Employee("Konner Hartman", 1, email);
            expect(employee.email).toBe(email);
        });
    });

    describe('role', () => {
        it('should set role using constructor function', () => {
            const role = "Employee";
            const employee = new Employee("Konner Hartman", 1, "konner.hartman@yahoo.com");
            expect(employee.getRole()).toBe(role);
        });
    });
});