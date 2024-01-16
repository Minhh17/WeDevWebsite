const Student = require("../models/student");
const Admin = require("../models/admin");
const Lecturer = require("../models/lecturer");
const Account = require("../models/account");
// import format date
const { format, parseISO } = require("date-fns");

//------------- ACCOUNT CONTROLLER --------------
exports.getProfile = async (req, res, next) => {
  if (req.session.user.role === "student") {
    info = await Student.getStudentById(req.session.user.id);
  } else if (req.session.user.role === "admin")
    info = await Admin.getAdminById(req.session.user.id);
  else {
    info = await Lecturer.getLecturerById(req.session.user.id);
  }

  // format dob
  info.dob = format(info.dob, "yyyy-MM-dd");

  res.render("home/profile", {
    isLogged: req.session.user ? true : false,
    account: req.session.user,
    pageTitle: "Profile",
    path: "/profile",
  });
};

exports.postUpdateProfile = async (req, res, next) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const dob = req.body.dob;
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;

  // check if avatar is uploaded
  let avatar = null;
  try {
    avatar = req.file.filename;
  } catch {
    avatar = req.body.avatar ? req.body.avatar : null;
  }

  // handle update profile
  if (req.session.user.role === "student") {
    const student = new Student(
      req.session.user.id,
      first_name,
      last_name,
      phone,
      address,
      avatar,
      email,
      dob
    );
    await Student.updateStudent(student);
  } else if (req.session.user.role === "admin") {
    const admin = new Admin(
      req.session.user.id,
      first_name,
      last_name,
      phone,
      address,
      avatar,
      email,
      dob
    );
    await Admin.updateAdmin(admin);
  } else {
    const lecturer = new Lecturer(
      req.session.user.id,
      first_name,
      last_name,
      phone,
      address,
      avatar,
      email,
      dob,
      req.body.info
    );
    await Lecturer.updateLecturer(lecturer);
  }
  res.redirect("/profile");
};

exports.postchangePassword = async (req, res, next) => {
  // handle if old password and new password not match or new password and confirm password not match
  const account = await Account.getAccountById(req.session.user.id);
  if (
    req.body.old_password !== account.password ||
    req.body.new_password !== req.body.confirm_password
  ) {
    return res.redirect("/profile");
  }

  // handle change password
  await Account.changePassword(req.session.user.id, req.body.new_password);
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/login");
  });
};

exports.postDeleteAccount = async (req, res, next) => {
  const account_id = req.session.user.id;
  if (req.session.user.role === "student") {
    await Student.deleteStudent(account_id);
  } else if (req.session.user.role === "admin") {
    await Admin.deleteAdmin(account_id);
  } else {
    await Lecturer.deleteLecturer(account_id);
  }
  Account.deleteAccount(account_id);
  res.redirect("/admin/students");
};
