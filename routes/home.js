const express = require("express");

const shopController = require("../controllers/home");

const router = express.Router();

router.get("/", shopController.getIndex);

// upload image
const uploadMiddleware = require("../middleware/upload");
router.get("/upload", shopController.showForm);
router.post("/upload", uploadMiddleware, shopController.uploadImage);

module.exports = router;
