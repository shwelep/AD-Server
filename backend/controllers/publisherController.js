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

exports.createPublisher = async (req, res) => {
    try {
        const { PublisherName, WebUrl } = req.body;
        const newPublisher = await Publisher.create({ PublisherName, WebUrl });
        res.status(201).json(newPublisher);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}