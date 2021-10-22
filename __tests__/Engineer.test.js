const Engineer = require('../lib/Engineer.js');

// Tests to see if engineer github value is correct
describe('Engineer', () => {
    describe('github', () => {
        it('should set github link', () => {
            const github = "konnerhartman";
            const employee = new Engineer("Konner Hartman", 1, "konner.hartman@yahoo.com", github);
            expect(employee.github).toBe(github);
        });
    });

    // Tests to see if engineer role value is correct
    describe('role', () => {
        it('should set role to Engineer', () => {
            const role = "Engineer";
            const employee = new Engineer("Konner Hartman", 1, "konner.hartman@yahoo.com", "konnerhartman");
            expect(employee.getRole()).toBe(role);
        });
    });
});