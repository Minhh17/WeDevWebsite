const mysql = require('mysql');

// connect to mysql database

function connect() {

    const con = mysql.createConnection({
        host: "englishcenter.mysql.database.azure.com",
        user: "user",
        password: "ktpmud2023@"
    });
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        // con.query("CREATE DATABASE testminh", function (err, result) {
        //     console.log("Database created");
        // });
    });
}

module.exports = { connect }
