const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Limpotre08",
  database: "homer"
});

module.exports = connection;
