const { GEOGRAPHY } = require("sequelize");
const Campaigns = require("../models/Campaigns");

exports.getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaigns.findAll();
    res.json(campaigns);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.createCampaign = async (adId, campaignData) => {
  try {
    // Fetch the associated ad's information
    const ad = await Ads.findByPk(adId);

    if (!ad) {
      throw new Error("Associated ad not found.");
    }

    // Include ad information in the campaign data
    const campaignInfo = {
      ...campaignData,
      AdID: adId,
      AdName: ad.AdName,
      AdType: ad.AdType,
      AdDuration: ad.AdDuration,
      Geography: ad.Geography,
      AdFrequency: ad.AdFrequency,
      AdPlacement: ad.AdPlacement,
      Timing: ad.Timing,
      Channel: ad.Channel,
      Format: ad.Format,
    };

    // Create the campaign with the combined data
    const newCampaign = await Campaigns.create(campaignInfo);
    return newCampaign;
  } catch (error) {
    console.error("Error creating campaign:", error);
    throw error;
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
}

