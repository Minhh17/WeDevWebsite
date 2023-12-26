const mysql = require('mysql');

// connect to mysql database

const db = mysql.createConnection({
    host: "englishcenter.mysql.database.azure.com",
    user: "user",
    password: "ktpmud2023@"
});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    db.query("CREATE DATABASE testminh", function (err, result) {
        console.log("MySQL Database created");
    });
    db.query("USE `english_center`", function (err, result) {
        console.log("Using database");
    });
    // con.query("CREATE TABLE student (name VARCHAR(255), address VARCHAR(255))", function (err, result) {
    //     console.log("Table created");
    // });
    // con.query("INSERT INTO student (name, address) VALUES ('Haiminh', 'Highway 37')", function (err, result) {
    //     console.log("1 record inserted");
    // });

});

module.exports = db;
