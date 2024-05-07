const express = require("express");
const router = express.Router();
const campaignController = require("../controllers/campaignController");

router.get("/", campaignController.getCampaigns);

router.get("/:adId", campaignController.getAdCampaigns);

router.post("/newCampaign", campaignController.createCampaignWithAd);

module.exports = router;