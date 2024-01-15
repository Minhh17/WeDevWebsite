const sql = require("../../config/db/index"); 

// constructor
const Account = function(account) {  // constructor function
    this.username = username;
    this.password = password;
    this.user_type = user_type;
    this.admin_id = admin_id;
    this.lecturer_id = lecturer_id;
    this.student_id = student_id; 
};

// check account and get rows of data from database


Account.checkAccount = (username, password, callback) => {
    sql.query("SELECT * FROM account WHERE username = binary ? AND password = binary ?", [username, password], (err, res) => {
        if (err) {
            console.log("Error: ", err);
            callback(err, null);
            return;
        }

        if (res.length) {
            // console.log("Account found: ", res[0]);
            callback(null, res[0]);
            return;
        }

        // Account not found
        callback({ message: "Account not found" }, null);
        console.log("Account not found");
    });
};


module.exports = Account;