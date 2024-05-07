const bcrypt = require("bcrypt");
const User = require("../models/Users");
const Publisher = require("../models/Publisher");
const Advertiser = require("../models/Advertiser");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.signup = async (req, res) => {
  try {
    const { UserName, Email, Password, UserType } = req.body;

    // Check if user with the provided email already exists
    const existingUser = await User.findOne({ where: { Email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(Password, 10);

    let newUser;
     // Create the new user with the user type's ID
     newUser = await User.create({
        UserName,
        Email,
        Password: hashedPassword,
        UserType
      });

    
    let userDetail;

    // Create the new user based on the user type
    if (UserType === "publisher") {
      // Create a new publisher
      userDetail = await Publisher.create({
        publisher_name: UserName,
        Email: Email,  UserID: newUser.UserID
      });
    } else if (UserType === "advertiser") {
      // Create a new advertiser
      userDetail = await Advertiser.create({
        advertiser_name: UserName,
        Email: Email,  UserID: newUser.UserID
      });
    } else {
      return res.status(400).json({ error: "Invalid user type" });
    }

   

    // Return success response
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error", error });
  }
};

exports.login = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    // Check if user with the provided email exists
    const user = await User.findOne({ where: { Email } });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    console.log(Password, user.Password);

    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(Password, user.Password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Return success response
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Error logging in:", error);
    console.error("Error stack:", error.stack);
    res.status(500).json({ error: "Internal server error:", error });
  }
};
