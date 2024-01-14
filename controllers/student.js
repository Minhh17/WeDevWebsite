const Student = require("../models/student");

//---------------- ADMIN CONTROLLER ---------------
exports.getIndex = async (req, res, next) => {
  res.render("student/index", {
    isLogged: req.session.user ? true : false,
    account: req.session.user,
    pageTitle: "Dasboard",
    path: "/student",
  });
};
