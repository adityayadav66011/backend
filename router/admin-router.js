const express = require('express');
const { getAllUsers, getAllContacts, getAllContact1 } = require('../controllers/admin-controller');
const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();

router.route('/users').get(authMiddleware, getAllUsers); // Route for fetching users
router.route('/contacts').get(authMiddleware, getAllContacts); // Route for fetching contacts
router.route('/contact1').get(authMiddleware, getAllContact1); // Route for fetching Contact1 data

module.exports = router;
