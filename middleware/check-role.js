const { execute } = require("../util/database");

function checkRole(role) {
  return function (req, res, next) {
    try {
      if (req.session.user.role === role) {
        next();
      } else {
        res.status(403).send("Unauthorized");
      }
    } catch (err) {
      // res.status(500).send("Internal Server Error");
      // res.status(403).send("Unauthorized");
      res.redirect("/login");
    }
  };
}

module.exports = checkRole;
