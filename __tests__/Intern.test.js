const Intern = require('../lib/Intern.js');

// Tests to see if intern school value is correct
describe('Intern', () => {
    describe('school', () => {
        it('should set name of intern school', () => {
            const school = "Harvard";
            const employee = new Intern("Konner", 1, "konner.hartman@yahoo.com", school);
            expect(employee.school).toBe(school);
        });
    });

    // Tests to see if intern role value is correct
    describe('role', () => {
        it('should set role to Intern', () => {
            const role = "Intern";
            const employee = new Intern("Konner", 1, "konner.hartman@yahoo.com", "Harvard");
            expect(employee.getRole()).toBe(role);
        });
    });
});
