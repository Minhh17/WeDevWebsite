const Student = require("../models/lecturer");

//---------------- ADMIN CONTROLLER ---------------
exports.getIndex = async (req, res, next) => {
  res.render("lecturer/index", {
    isLogged: req.session.user ? true : false,
    account: req.session.user,
    pageTitle: "Dashboard",
    path: "/lecturer",
  });
};
