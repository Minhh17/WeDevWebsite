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
    // db.query("INSERT INTO exam_process (enrollment_id, exam_id, result) VALUES ('1', '1', '9    ')", function (err, result) {
    //     console.log("1 record inserted");
    // });
    // db.query("DELETE FROM student WHERE student_id = 2003;", function (err, result) {
    //     console.log("1 record deleted");
    // });

});

module.exports = db;
