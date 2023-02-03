// const trackerInfo = require(`.db/schema.sql`);
const inquirer = require(`inquirer`);
// const fs = require(`fs`);
const employees = [];
const departments = [];
const roles = [];


function menu(){
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            choices: ['Add department','View all departments','Add role','View all roles','Add employee','Update employee role','View all employees'],
            name: 'next step'
        }
    ]).then(ans=>{
        if(ans.nextStep==='Add a department'){
            departmentInfo();
        }else if(ans.nextStep==='View all departments'){
            viewDepartments();
        }else if(ans.nextStep==='Add a role'){
            rollInfo();
        }else if(ans.nextStep==='View all roles'){
            viewRoles();
        }else if(ans.nextStep==='Add employee'){
            employeeInfo();
        }else if(ans.nextStep==='Update employee role'){
            updateRole();
        }else {
            viewAll();
        }
    })

    function departmentInfo(){
        inquirer.prompt([
            {
                type: 'input',
                message: 'Whats the name of the new department?',
                name: 'newDepartment'
            }
        ]).then(ans=>{
            const newDepartment = new department(ans.newDepartment)
            viewDepartments.push(newDepartment)
            console.log(departments)
            menu()

        })

    }
    function viewDepartments(){
        console.log(departments)

    }
    function rollInfo(){
        inquirer.prompt([
            {
                type: 'input',
                message: 'Whats the name of the new Role?',
                name: 'newRole'
            },
            {
                type: 'input',
                message: 'What is thesalary of the new role?',
                name: 'salary'
            },
            {
                type: 'list',
                message: 'which department does this role belong to?',
                choices: ['sales','engineering','finance','management'],
                name: 'departmentOption'

            }

        ]).then(ans=>{
            const newRole = new roles(ans.newRole)
            viewRoles.push(newRole)
            console.log(roles)
            menu()

        })
    }
    function viewRoles(){
        console.log(roles)

    }
    function employeeInfo(){
        inquirer.prompt([
            {
                type: 'input',
                message: 'Whats the name of the new department?',
                name: 'newDepartment'
            }
        ]).then(ans=>{
            const newDepartment = new department(ans.newDepartment)
            viewDepartments.push(newDepartment)
            console.log(departments)
            menu()

        })
    }
    function updateRoll(){

    }
    function viewAll(){
        console.log(employees)

    }








}
menu();
