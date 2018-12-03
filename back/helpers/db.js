const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.DEV_USER,
  password: process.env.DEV_PASSWORD,
  database: "odyssey"
});
module.exports = connection;
