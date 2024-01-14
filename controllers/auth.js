const Account = require("../models/account");

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};

exports.postLogin = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  // get info from database
  const user = await Account.checkAccount(username, password);

  if (user.length > 0) {
    console.log("Login successfully");
    let username, id, role;
    switch (user[0].user_type) {
      case 0:
        username = user[0].username;
        role = "admin";
        id = user[0].admin_id;
        break;
      case 1:
        username = user[0].username;
        role = "lecturer";
        id = user[0].lecturer_id;
        break;
      case 2:
        username = user[0].username;
        role = "student";
        id = user[0].student_id;
        break;
    }
    req.session.user = {
      username: username,
      id: id,
      role: role, // 'admin', 'student', or 'lecturer'
    };
    res.redirect("/");
  } else {
    console.log("Login failed");
    res.redirect("/login");
  }
};

exports.getLogout = async (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
