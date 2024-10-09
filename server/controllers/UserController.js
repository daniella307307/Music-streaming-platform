const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');  // Correct package name


const register = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    try {
      
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(401).json({ message: "User already exists" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        return res.status(200).json({ message: "User saved successfully"});
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

const login = async (req, res) => {
    const { identifier, password } = req.body;

    try {
        const user = await User.findOne({ $or: [{ email: identifier }, { username: identifier }] });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password , user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

       
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({ message: "Logged in successfully", token });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


const delete_user = async (req, res) => {
    const { id } = req.params;

    try {
        await User.findByIdAndDelete(id);
        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

const logout = (req, res) => {
    res.clearCookie('token');
    return res.status(200).json({ message: "Logged out successfully" });
};

module.exports = {
    register,
    login,
    delete_user,
    logout
};
