const User = require ('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('json-web-token');

const register = async (req, res) => {
     const { username , email, password, confirmPassword } = req.body;

     const user = User.findOne({email:email}, {username:username});
     if(user){
        return res.status(401).json({message : "User already exists"})
     }
     try {
        if(password!== confirmPassword){
            return res.status(400).json({message :"Passwords do not match"})
        }
        const hashedPassword = bcrypt(password,10)
        const newUser = new User({username, email, password : hashedPassword})
        await newUser.save();
        const token = jwt.sign({_id: newUser._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        return res.status(200).json({message:"User saved successfully"},token);
     } catch (error) {
        res.status(500).json({message :"Internal server Error"})
     }
}

const login = async (req, res) => {
    const {identifier, password} = req.body;
    let user = User.findOne({email:identifier, username:identifier})
    if (!user) {
        res.status(404).json({message:"User not found"})
    }
    hashedPassword = bcrypt(password, 10)
    try {
      if(user.password === hashedPassword) {  
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        return res.status(200).json({message:"Logged in successfully"}, token);
      }
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

const delete_user = (req, res) => {
    const { id } = req.params;
    User.findByIdAndDelete(id, (err) => {
        if (err) {
            res.status(500).json({message: "Internal server error"});
        } else {
            res.status(200).json({message: "User deleted successfully"});
        }
    })
}

const logout = async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({message: "Logged out successfully"});
    res.redirect('/login');
}

module.exports = {
    register,
    login,
    delete_user,
    logout
}
