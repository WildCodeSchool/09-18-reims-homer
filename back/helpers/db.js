const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "maximus2401",
  database: "homer"
});
module.exports = connection;
