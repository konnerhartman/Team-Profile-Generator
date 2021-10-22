const Manager = require('../lib/Manager.js');

// Tests to see if manager office number value is correct
describe('Manager', () => {
    describe('office', () => {
        it('should set office number', () => {
            const office = 4;
            const employee = new Manager("Konner Hartman", 1, "konner.hartman@yahoo.com", office);
            expect(employee.office).toBe(office);
        });
    });

    // Tests to see if manager role value is correct
    describe('role', () => {
        it('should set role to Manager', () => {
            const role = "Manager";
            const employee = new Manager("Konner Hartman", 1, "konner.hartman@yahoo.com", 4);
            expect(employee.getRole()).toBe(role);        
        });
    });
});