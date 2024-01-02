const Student = require("../models/student");

//---------------- ADMIN CONTROLLER ---------------
exports.getIndex = (req, res, next) => {
  res.render("admin/index", {
    pageTitle: "Admin",
    path: "/admin",
  });
};

//------------- STUDENT CONTROLLER --------------
exports.getStudents = async (req, res, next) => {
  students = await Student.getAllStudents();
  res.render("admin/students", {
    isLogged: req.session.user ? true : false,
    students: students,
    pageTitle: "Students",
    path: "/admin/students",
  });
};

exports.getAddStudent = (req, res, next) => {
  res.render("admin/add-student", {
    isLogged: req.session.user ? true : false,
    pageTitle: "Add Student",
    path: "/admin/add-student",
    formsCSS: true,
    productCSS: true,
    activeAddStudent: true,
  });
};

exports.postAddStudent = (req, res, next) => {
  // const student_id = req.body.student_id;
  const student_id = null;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const phone = req.body.phone;
  // const address = req.body.address;
  const address = null;
  // const avatar = req.body.avatar;
  const avatar = null;
  const email = req.body.email;
  // const dob = req.body.dob;
  const dob = null;
  const student = new Student(
    student_id,
    first_name,
    last_name,
    phone,
    address,
    avatar,
    email,
    dob
  );
  Student.addStudent(student);
  res.redirect("/");
};

exports.getStudent = async (req, res, next) => {
  const student_id = req.params.student_id;
  const student = await Student.getStudentById(student_id);
  res.render("admin/student-detail", {
    student: student,
    pageTitle: "Student Detail",
    path: "/admin/student-detail",
  });
};

exports.postStudent = (req, res, next) => {
  const student_id = req.body.student_id;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const phone = req.body.phone;
  const address = req.body.address;
  const avatar = req.body.avatar;
  const email = req.body.email;
  const dob = req.body.dob;
  const student = new Student(
    student_id,
    first_name,
    last_name,
    phone,
    address,
    avatar,
    email,
    dob
  );
  Student.updateStudent(student);
  res.redirect("/");
};

exports.deleteStudent = (req, res, next) => {
  const student_id = req.params.student_id;
  Student.deleteStudent(student_id);
  res.redirect("/");
};
//---------------- END ----------------
