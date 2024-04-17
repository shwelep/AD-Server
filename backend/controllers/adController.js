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