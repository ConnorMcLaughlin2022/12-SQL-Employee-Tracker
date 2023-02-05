USE employee_db;

INSERT INTO department (name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');


INSERT INTO role (department_id,salary,title)
VALUES
(1,100000,'Sales Lead'),
(1,80000,'Sales Person'),
(2,150000,'Lead Engineer'),
(2,120000,'Software Engineer'),
(3,160000,'Account Manager'),
(3,125000,'Accountant'),
(4,250000,'Legal Team Lead'),
(4,190000,'Lawer');

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Steven','Gilbert',1,NULL),
('Patricia','Yonder',3,NULL),
('Kevin','Walsh',7,NULL),
('Corey','Malor',7,3),
('Kristin','Reed',4,2),
('Patrick','White',6,7),
('Fred','Crass',5,NULL),
('Kyle','Bridger',2,1);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employees;

-- SELECT * FROM employees JOIN role on employees.role_id = role.id;
SELECT employees.id, employees.first_name, employees.last_name, role.title, department.name AS department, role.salary, manager.first_name AS manager_first, manager.last_name AS manager_last FROM employees LEFT JOIN role on employees.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employees manager ON manager.id = employees.manager_id;
