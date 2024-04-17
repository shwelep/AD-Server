const Advertiser = require("../models/Advertiser");

exports.getAdvertisers = async (req, res) => {
    try {
        const advertiser = await Advertiser.findAll();
        res.json(advertiser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}