const express = require("express");

const accountController = require("../controllers/account");
const checkLogged = require("../middleware/check-logged");
const router = express.Router();
// import upload middleware
const uploadMiddleware = require("../middleware/upload");

// get profile
router.get("/profile", checkLogged(), accountController.getProfile);
router.post(
  "/change-password",
  checkLogged(),
  accountController.postchangePassword
);
module.exports = router;
router.post(
  "/update-profile",
  checkLogged(),
  uploadMiddleware,
  accountController.postUpdateProfile
);

router.post(
  "/delete-account",
  checkLogged(),
  accountController.postDeleteAccount
);
