const express = require("express");
const router = express.Router();
const advertiserController = require("../controllers/advertiserController");

router.get("/", advertiserController.getAdvertisers);

module.exports = router;