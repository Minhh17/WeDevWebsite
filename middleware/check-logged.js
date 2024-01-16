const { execute } = require("../util/database");

function checkLogged() {
  return function (req, res, next) {
    try {
      if (req.session.user) {
        next();
      } else {
        res.redirect("/login");
      }
    } catch (err) {
      res.redirect("/login");
    }
  };
}

module.exports = checkLogged;
