const express = require("express");
const router = express.Router();
const Contact18 = require("../models/contact-model18");
const Contact19 = require("../models/contact-model19");

// Route for fetching Crop_Name dropdown options from Contact18 model
router.route("/cropNames").get(async (req, res) => {
    try {
        const cropNames = await Contact18.find({}, { Crop_Name: 1, _id: 0 });
        res.json(cropNames);
    } catch (error) {
        console.error("Error fetching crop names:", error);
        res.status(500).json({ message: "Error fetching crop names" });
    }
});

// Route for fetching Crop_Type1 dropdown options from Contact18 model
router.route("/cropTypes1").get(async (req, res) => {
    try {
        const cropTypes1 = await Contact18.find({}, { Crop_Type1: 1, _id: 0 });
        res.json(cropTypes1);
    } catch (error) {
        console.error("Error fetching crop types 1:", error);
        res.status(500).json({ message: "Error fetching crop types 1" });
    }
});

// Route for fetching Crop_Type2 dropdown options from Contact18 model
router.route("/cropTypes2").get(async (req, res) => {
    try {
        const cropTypes2 = await Contact18.find({}, { Crop_Type2: 1, _id: 0 });
        res.json(cropTypes2);
    } catch (error) {
        console.error("Error fetching crop types 2:", error);
        res.status(500).json({ message: "Error fetching crop types 2" });
    }
});

// Route for fetching Crop_Type3 dropdown options from Contact18 model
router.route("/cropTypes3").get(async (req, res) => {
    try {
        const cropTypes3 = await Contact18.find({}, { Crop_Type3: 1, _id: 0 });
        res.json(cropTypes3);
    } catch (error) {
        console.error("Error fetching crop types 3:", error);
        res.status(500).json({ message: "Error fetching crop types 3" });
    }
});

// Route for fetching Crop_Grade dropdown options from Contact18 model
router.route("/cropGrades").get(async (req, res) => {
    try {
        const cropGrades = await Contact18.find({}, { Crop_Grade: 1, _id: 0 });
        res.json(cropGrades);
    } catch (error) {
        console.error("Error fetching crop grades:", error);
        res.status(500).json({ message: "Error fetching crop grades" });
    }
});

// Route for fetching Crop_Quality dropdown options from Contact18 model
router.route("/cropQualities").get(async (req, res) => {
    try {
        const cropQualities = await Contact18.find({}, { Crop_Quality: 1, _id: 0 });
        res.json(cropQualities);
    } catch (error) {
        console.error("Error fetching crop qualities:", error);
        res.status(500).json({ message: "Error fetching crop qualities" });
    }
});

// Route for submitting Contact19 form
router.route("/Contact19").post(async (req, res) => {
    try {
        const { Crop_Name, Crop_Type1, Crop_Type2, Crop_Type3, Crop_Grade, Crop_Quality, Crop_Lot_Number, Date_Of_Reaping } = req.body;
        await Contact19.create({ Crop_Name, Crop_Type1, Crop_Type2, Crop_Type3, Crop_Grade, Crop_Quality, Crop_Lot_Number, Date_Of_Reaping });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error submitting Contact19 form:", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
});

module.exports = router;
