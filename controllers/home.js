const Course = require("../models/course");
const Student = require("../models/student");
const Admin = require("../models/admin");
const Lecturer = require("../models/lecturer");

//------------- HOME CONTROLLER --------------
exports.getIndex = async (req, res, next) => {
  courses = await Course.getAllCourses();
  lecturers = await Lecturer.getAllLecturers();
  res.render("home/index", {
    isLogged: req.session.user ? true : false,
    account: req.session.user,
    courses: courses,
    Lecturer: lecturers,
    pageTitle: "English Center",
    path: "/",
  });
};
// ------------- END HOME CONTROLLER --------------
