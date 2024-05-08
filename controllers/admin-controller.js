const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const Contact1 = require("../models/contact-model1"); // Import the Contact1 model

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    console.log(users);
    if (!users || users.length == 0) {
      return res.status(404).json({ message: "No users Found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();

    if (!contacts || contacts.length == 0) {
      return res.status(404).json({ message: "No contacts Found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

const getAllContact1 = async (req, res, next) => {
  try {
    const contact1 = await Contact1.find();

    if (!contact1 || contact1.length == 0) {
      return res.status(404).json({ message: "No Contact1 Found" });
    }
    return res.status(200).json(contact1);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllUsers, getAllContacts, getAllContact1 };
