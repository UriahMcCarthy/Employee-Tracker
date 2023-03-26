const mysql = require('mysql2');
var inquirer = require('inquirer');

inquirer
.prompt([

    {
      type: 'list',
      name: 'listQuestion1',
      message: 'What would you like to do?',
      choices: ['Update Employee Role','View All Roles','Add Role', 'View All Departments', 'Add Department', 'Quit', 'View All Employees'],
      default: 'Quit'
    },
])

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'employee_tracker',
  password: 'yurisrevenge'
});



// simple query
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

connection.query('', function(err, results, fields){
    console.log(results);
    console.log(err);
    console.log(fields);
    employee_one = results
})

// with placeholder
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );