const Course = require("../models/course");

//------------- STUDENT CONTROLLER --------------
exports.getIndex = async (req, res, next) => {
  courses = await Course.getAllCourses();
  res.render("home/index", {
    courses: courses,
    pageTitle: "English Center",
    path: "/",
  });
};
