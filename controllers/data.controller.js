const Data = require("../models/Data");
const logger = require("../config/logger");

const getData = async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data);
    } catch (error) {
        logger.error("❌ Failed to fetch data", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const createData = async (req, res) => {
    try {
        const data = new Data(req.body);
        await data.save();
        logger.info(`✅ New data created: ${data.title}`);
        res.status(201).json(data);
    } catch (error) {
        logger.error("❌ Failed to create data", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const deleteData = async (req, res) => {
    try {
        await Data.findByIdAndDelete(req.params.id);
        logger.info(`✅ Data deleted: ${req.params.id}`);
        res.json({ message: "Data deleted" });
    } catch (error) {
        logger.error("❌ Failed to delete data", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { getData, createData, deleteData };
