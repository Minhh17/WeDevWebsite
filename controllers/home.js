const Course = require("../models/course");
const Lecturer = require("../models/lecturer");

//------------- STUDENT CONTROLLER --------------
exports.getIndex = async (req, res, next) => {
  courses = await Course.getAllCourses();
  lecturers = await Lecturer.getAllLecturers();
  res.render("home/index", {
    isLogged: req.session.user ? true : false,
    courses: courses,
    Lecturer: lecturers,
    pageTitle: "English Center",
    path: "/",
  });
};
