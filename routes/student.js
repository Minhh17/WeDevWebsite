const express = require("express");

const studentController = require("../controllers/student");

const checkRole = require("../middleware/check-role");

const router = express.Router();

// ------------ STUDENT CONTROLLER ------------

// /admin => GET
router.get("/", checkRole("student"), studentController.getIndex);

module.exports = router;
