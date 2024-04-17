const Publisher = require("../models/Publisher");

exports.getPublishers = async (req, res) => {
    try {
        const publisher = await Publisher.findAll();
        res.json(publisher);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}