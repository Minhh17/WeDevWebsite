const Course = require("../models/course");
const Student = require("../models/student");
const Admin = require("../models/admin");
const Lecturer = require("../models/lecturer");

// import format date
const { format, parseISO } = require("date-fns");

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
// ------------- END STUDENT CONTROLLER --------------

//------------- ACCOUNT CONTROLLER --------------
exports.getProfile = async (req, res, next) => {
  // handle if user not logged in
  if (!req.session.user) {
    return res.redirect("/login");
  }

  if (req.session.user.role === "student") {
    info = await Student.getStudentById(req.session.user.id);
  } else if (req.session.user.role === "admin")
    info = await Admin.getAdminById(req.session.user.id);
  else {
    info = await Lecturer.getLecturerById(req.session.user.id);
  }

  // format dob
  info.dob = format(lecturer.dob, "yyyy-MM-dd");

  res.render("home/profile", {
    isLogged: req.session.user ? true : false,
    account: req.session.user,
    pageTitle: "Profile",
    path: "/profile",
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
