const express = require("express");
const router = express.Router();
const { fetchContact24Data } = require("../controllers/get-contact"); // Import the fetchContact24Data function from the controller file

// Route to fetch filtered Contact Form 24 data
router.get("/filteredData", fetchContact24Data); // Use the fetchContact24Data function as the route handler

module.exports = router;
