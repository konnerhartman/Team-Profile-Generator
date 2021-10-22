const Employee = require('../lib/Employee.js');
// Tests to see if employee name value from constructor is correct
describe('Employee', () => {
    describe('name', () => {
        it('should set name using constructor function', () => {
            const name = "Konner Hartman";
            const employee = new Employee(name);
            expect(employee.name).toBe(name);
        });
    });

    // Tests to see if employee ID value from constructor is correct
    describe('id', () => {
        it('should set id using constructor function', () => {
            const id = "1";
            const employee = new Employee("Konner Hartman", id, "konner.hartman@yahoo.com");
            expect(employee.id).toBe(id);
        });
    });

    // Tests to see if employee email value from constructor is correct
    describe('email', () => {
        it('should set email using constructor function', () => {
            const email = "konner.hartman@yahoo.com";
            const employee = new Employee("Konner Hartman", 1, email);
            expect(employee.email).toBe(email);
        });
    });

    // Tests to see if employee role value from constructor is correct
    describe('role', () => {
        it('should set role using constructor function', () => {
            const role = "Employee";
            const employee = new Employee("Konner Hartman", 1, "konner.hartman@yahoo.com");
            expect(employee.getRole()).toBe(role);
        });
    });
});