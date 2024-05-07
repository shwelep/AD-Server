const express = require("express");
const router = express.Router();
const adController = require("../controllers/adController");

router.get("/", adController.getAds);
router.get("/adInventory", adController.getAdInventory);


module.exports = router;