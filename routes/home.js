const express = require("express");

const shopController = require("../controllers/home");

const router = express.Router();

router.get("/", shopController.getIndex);

module.exports = router;
