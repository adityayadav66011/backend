const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized. Token not provided." });
  }

  // Assuming token is in the format "Bearer <jwtToken>, Removing the "Bearer" prefix and trimming any whitespace
  const jwtToken = token.replace("Bearer", "").trim();

  try {
    // Verifying the token
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    // Getting the complete user details & also we don't want the password to be sent
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });

    req.token = jwtToken; // Assign the token to req.token
    req.user = userData;
    req.userID = userData._id; // Corrected assignment of userID

    // Move on to the next middleware or route handler
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized. Invalid token." });
  }
};

module.exports = authMiddleware;
