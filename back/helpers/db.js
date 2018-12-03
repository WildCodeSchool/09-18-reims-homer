const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fabien",
  database: "odyssey_homer"
});
module.exports = connection;
