const express = require("express");

const lecturerController = require("../controllers/lecturer");

const checkRole = require("../middleware/check-role");

const router = express.Router();

// ------------ STUDENT CONTROLLER ------------

// /lecturer => GET
router.get("/", checkRole("lecturer"), lecturerController.getIndex);

module.exports = router;
