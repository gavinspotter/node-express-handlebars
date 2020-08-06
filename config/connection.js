var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8888,
  user: "root",
  password: "password",
  database: "burgerdb",
});

connection.connect(function (err) {
  if (err) {
    return;
  }
});

module.exports = connection;
