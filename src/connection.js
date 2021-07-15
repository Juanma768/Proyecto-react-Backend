const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'guitarhotel',
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Conectado!!!');
  }
});

module.exports = connection;
