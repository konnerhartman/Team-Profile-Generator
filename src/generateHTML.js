function generatePage(employeeCard) {
return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        </head>
        <body class="bg-secondary">
            <nav class="p-3 bg-primary mb-3 shadow-lg">
                <div class="container-fluid">
                <p class="text-center h1 ">Team Profile <i class="fas fa-users"></i>
                </p>
                </div>
            </nav>
            <main>
                <div class="container">
                    <div class="row justify-content-center">
                    ${employeeCard.name}
                    </div>
                </div>
            </main>

        </body>
        <script src="https://kit.fontawesome.com/2a07effbf4.js" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        </html>`
};

function generateManager(manager) {
return `<div class="card text-dark bg-info m-3 shadow-lg" style="max-width: 18rem;">
            <div class="card-header">${manager.name}</div>
            <div class="card-body">
                <h5 class="card-title"><i class="fas fa-tasks"></i> Manager</h5>
                <p class="card-text">ID: ${manager.id}</p>
                <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="card-text">Office Number: ${manager.office}</p>
            </div>
        </div>`
};

function generateEngineer(engineer) {
return `<div class="card text-dark bg-info m-3 shadow-lg" style="max-width: 18rem;">
            <div class="card-header">${engineer.name}</div>
            <div class="card-body">
                <h5 class="card-title"><i class="fas fa-wrench"></i> Engineer</h5>
                <p class="card-text">ID: ${engineer.id}</p>
                <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineeremail}</a></p>
                <p class="card-text">Github: <a href="https://github.com/${engineer.github}".${engineer.github}</a></p>
            </div>
        </div>`
};

function generateIntern(intern) {
return `<div class="card text-dark bg-info m-3 shadow-lg" style="max-width: 18rem;">
            <div class="card-header">${intern.name}</div>
            <div class="card-body">
                <h5 class="card-title"><i class="fas fa-university"></i> Intern</h5>
                <p class="card-text">ID: ${intern.id}</p>
                <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="card-text">School: ${intern.school}</p>
            </div>
        </div>`
};

function pullData(data) {
    employeeArray = [];

    
};

module.exports = generateHTML;