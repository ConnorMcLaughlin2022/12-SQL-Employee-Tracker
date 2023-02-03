const express = require('express');

const mysql = require('mysql2');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'employee_db',
  },
  console.log(`Connected to the employee_db database.`)
);


db.query('SELECT * FROM department', function (err, data) {
  if (err){
    console.table(err)
  }
    console.table(data);
  });
db.query('SELECT * FROM role', function (err, data) {
  if (err){
    console.table(err)
  }
    console.table(data);
  });
db.query('SELECT * FROM employees', function (err, data) {
  if (err){
    console.table(err)
  }
    console.table(data);
  });
app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  