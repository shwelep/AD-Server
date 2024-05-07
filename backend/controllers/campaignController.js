const Campaigns = require("../models/Campaigns");
const { upload } = require('../server');
const Ads = require("../models/Ads");

exports.getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaigns.findAll();
    res.json(campaigns);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.createCampaignWithAd = async (req, res) => {
  try {
    // Wrap the upload.single("file") middleware call in a Promise for proper error handling
    await new Promise((resolve, reject) => {
      upload.single("file")(req, res, async (err) => {
        try {
          if (err) {
            return res.status(400).json({ error: err.message });
          }

          // Extract campaign and ad data from the request body
          const {
            publisher_id,
            CampaignType,
            Channel,
            OfferImpression,
            DateStarted,
            Ad_Name,
            Ad_Type,
            Ad_Size,
            Ad_Duration,
            Geography,
            Ad_Placement,
          } = req.body;

          const adPath = req.file.path;

          // Create the ad
          const createdAd = await Ads.create({
            Ad_Name,
            publisher_id,
            Ad_Type,
            Ad_Size,
            Ad_Path: adPath,
            Ad_Duration,
            Geography,
            Ad_Placement,
          });

          // Create the campaign with the associated ad and other campaign fields
          const createdCampaign = await Campaigns.create({
            CampaignName: Ad_Name,
            CampaignType,
            Channel,
            OfferImpression,
            DateStarted,
            Ad_ID: createdAd.Ad_ID, // Assign the Ad_ID of the created ad to the campaign
          });

          // Return the created campaign and ad as a response
          res.status(201).json({
            message: "Campaign and ad created successfully",
            campaign: createdCampaign,
            ad: createdAd,
          });

          resolve(); // Resolve the Promise to indicate successful execution
        } catch (error) {
          console.error("Error creating campaign with ad:", error);
          res.status(500).json({ error: "Internal server error" });
          reject(error); // Reject the Promise to indicate failure
        }
      });
    });
  } catch (error) {
    console.error("Error handling file upload:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getAdCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaigns.findAll({
      where: {
        AdID: req.params.adId,
      },
    });
    res.json(campaigns);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
