const express = require("express");
const router = express.Router();
const bidController = require("../controllers/bidController");

router.get("/", bidController.getBids);
// router.get("/", bidController.getBids);

router.post("/", bidController.createBid);

module.exports = router;