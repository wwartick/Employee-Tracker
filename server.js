const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require('console.table');
const getDepartments = require('./lib/getDepartments');
const getRoles = require('./lib/getRoles');
const getEmployees = require('./lib/getEmployees');

db.connect(err => {
    if (err) throw err;
    console.log('Successful connection');
    initialPrompt();
});

const initialPrompt = () => {
    inquirer.prompt ({
        type: 'list',
        name: 'initialPrompt',
        message: 'Choose an action below (use arrow keys/enter to choose).',
        choices: [
          'display all departments', 
          'display all roles', 
          'display all employees', 
          'Add a department', 
          'Add a role', 
          'Add an employee', 
          "Update an employee's role", 
          'EXIT'
        ]
    }).then(answer => {
        switch (answer.initialPrompt) {
            case ('display all departments'):
              displayDepartments();
              break;
            case ('display all roles'):
              displayRoles();
              break;
            case ('display all employees'):
              displayEmployees();
              break;
            case ('Add a department'):
              addDepartment();
              break;
            case ('Add a role'):
              addRole();
              break;
            case ('Add an employee'):
              addEmployee();
              break;
            case ('Update an employees role'):
              updateEmployee();
              break;
            case ('EXIT'):
              db.end();
          }
    })
};

const displayDepartments = () => {
    const sql = `SELECT * FROM department`;

    db.query(sql, (err,data) => {
        if (err) throw err;
        console.table('\nDemartments',data);
        initialPrompt();
    });
};

const displayRoles = () => {
    const sql = `SELECT role.*, department.name AS departments
                 FROM role
                 LEFT JOIN department
                 ON role.department_id = department.id`;

    db.query(sql, (err, data) => {
        let sortedData = [];
        if (err) throw err;

        data.forEach(role => {
            const obj = {
                id:role.id,
                title: role.title,
                salary: role.salary,
                departments: role.departments
            };
            sortedData.push(obj);
        });
        console.table('\nRoles', sortedData);
        initialPrompt();
    });
};

const viewEmployees = () => {
    const sql = `SELECT employee.*, role.title, role.salary, department.name AS department`
}
