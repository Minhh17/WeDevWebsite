const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "englishcenter.mysql.database.azure.com",
  user: "user",
  password: "ktpmud2023@",
  database: "english_center",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();
