const Ads = require("../models/Ads");

exports.getAds = async (req, res) => {
  try {
    const ads = await Ads.findAll();
    res.json(ads);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.createAd = async (req, res) => {
  try {
    const { advertiser_id, format } = req.body;
    const newAd = await Ads.create({ advertiser_id, format });
    res.status(201).json(newAd);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getAdInventory = async (req, res) => {
    try {
      const ads = await Ads.findAll({
        attributes: [
          "Ad_Name",
          "Ad_Type",
          [
            sequelize.literal("SUBSTRING_INDEX(SUBSTRING_INDEX(Ad_Size, '(', -1), ')', 1)"),
            "Ad_Size_Name"
          ],
          [
            sequelize.literal("TRIM(SUBSTRING_INDEX(Ad_Size, '(', 1))"),
            "Ad_Size_Dimensions"
          ]
        ]
      });
      
      res.json(ads);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
