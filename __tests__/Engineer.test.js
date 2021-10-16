const Engineer = require('../lib/Engineer.js');

describe('Engineer', () => {
    describe('github', () => {
        it('should set github link', () => {
            const github = "konnerhartman";
            const employee = new Engineer("Konner Hartman", 1, "konner.hartman@yahoo.com", github);
            expect(employee.github).toBe(github);
        });
    });

    describe('role', () => {
        it('should set role to Engineer', () => {
            const role = "Engineer";
            const employee = new Engineer("Konner Hartman", 1, "konner.hartman@yahoo.com", "konnerhartman");
            expect(employee.getRole()).toBe(role);
        });
    });
});