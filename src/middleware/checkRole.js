const { execute } = require("../config/db/index");

function checkRole(role) {
  return function (req, res, next) {
    try {
      if (req.session.user.role === role) {
        next();
      } else {
        res.status(403).redirect("/login");
      }
    } catch (err) {
      res.status(403).redirect("/login");
    }
  };
}

module.exports = checkRole;