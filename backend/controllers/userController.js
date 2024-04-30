const User = require("../models/Users");

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
      const { username, email, password, user_type } = req.body;
  
      // Check if user with the provided email already exists
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ error: 'User with this email already exists' });
      }
  
      // Create the new user
      const newUser = await User.create({ username, email, password, user_type });
  
      // Return success response
      res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if user with the provided email exists
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
  
      // Check if password is correct
      if (password !== user.password) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
  
      // Return success response
      res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
