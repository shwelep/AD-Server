const express = require("express");
const router = express.Router();
const publisherController = require("../controllers/publisherController");

router.get("/", publisherController.getPublishers);

router.post("/", publisherController.createPublisher);

module.exports = router;