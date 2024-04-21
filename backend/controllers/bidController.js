const Bids = require('../models/Bids');

exports.getBids = async (req, res) => {
    try {
        const bids = await Bids.findAll();
        res.json(bids);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


exports.createBid = async (req, res) => {
    try {
        const { Channel, BidPrice, Status, Date } = req.body;
        const newBid = await Bids.create({ Channel, BidPrice, Status, Date });
        res.status(201).json(newBid);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}