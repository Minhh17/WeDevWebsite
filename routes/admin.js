const express = require("express");

const adminController = require("../controllers/admin");

const checkRole = require("../middleware/check-role");

const router = express.Router();

// ------------ MY CODE ------------

// /admin => GET
router.get("/", checkRole("admin"), adminController.getIndex);

// /admin/students => GET
router.get("/students", checkRole("admin"), adminController.getStudents);

// /admin/add-student => GET
router.get(
  "/students/add-student",
  checkRole("admin"),
  adminController.getAddStudent
);

// /admin/add-student => POST
router.post(
  "/students/add-student",
  checkRole("admin"),
  adminController.postAddStudent
);

// /admin/students/:student_id => GET
router.get(
  "/students/:student_id",
  checkRole("admin"),
  adminController.getStudent
);

// /admin/students/:student_id => POST
router.post(
  "/students/:student_id",
  checkRole("admin"),
  adminController.postStudent
);

// admin/students/:student_id => DELETE
router.delete(
  "/students/:student_id",
  checkRole("admin"),
  adminController.deleteStudent
);

// ------------- END --------------

module.exports = router;