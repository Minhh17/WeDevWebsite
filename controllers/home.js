const Course = require("../models/course");
const Lecturer = require("../models/lecturer");

//------------- STUDENT CONTROLLER --------------
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

// upload image

exports.showForm = (req, res) => {
  res.render("upload");
};

exports.uploadImage = (req, res) => {
  try {
    console.log(`File uploaded: ${req.file.filename}`);
    res.send("File uploaded!");
  } catch (err) {
    res.status(500).send("Error uploading image");
  }
};
