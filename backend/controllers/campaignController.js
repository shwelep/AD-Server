const Campaigns = require("../models/Campaigns");

exports.getCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaigns.findAll();
        res.json(campaigns);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}