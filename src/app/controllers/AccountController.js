const { render } = require("ejs");
const account = require("../models/account.js");
const Student = require("../models/student.js");
// const localStorage = require('localStorage');

class AccountController {

    index(req, res) {
        res.render('login');
    }

    // [POST] /account/login
    login(req, res) {
        const { username, password } = req.body;
        // console.log(req.body);
        account.checkAccount(username, password, (err, account) => {

            if (err) {
                res.render('login', { isLogin: false, error: err.message });
                return;
            }

            // isLogin = true;
            console.log("Login successfully");
            // console.log(account);            
            let id, role;

            switch (account.user_type) {
                case 0:
                    role = "admin";
                    id = account.admin_id;
                    break;
                case 1:
                    role = "lecturer";
                    id = account.lecturer_id;                    
                    break;
                case 2:
                    role = "student";
                    id = account.student_id;
                    break;
            }

            // console.log(id, role);
            // console.log(req.session.account.role);
            req.session.account = { id: id, role: role };

            res.locals.account = {
                id,
                role,
                // Add other necessary properties based on your account model
            };

            res.redirect('/');  
              
        });
    }

    // [GET] /account/logout
    logout(req, res) {
        req.session.destroy();
        res.redirect('/');
    }
}

module.exports = new AccountController;
