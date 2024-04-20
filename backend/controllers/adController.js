const Ads = require("../models/Ads");

exports.getAds = async (req, res) => {
    try {
        const ads = await Ads.findAll();
        res.json(ads);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

exports.createAd = async (req, res) => {
    try {
        const { advertiser_id, format } = req.body;
        const newAd = await Ads.create({ advertiser_id, format });
        res.status(201).json(newAd);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}