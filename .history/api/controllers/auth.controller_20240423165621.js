import { response } from "express";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"

export const signup = async (req, res) => {
const {username , email, password} = req.body;
if (!username || !password || !email || username === '' || email === '' || password === '')
{
    
    return res.status(400).json({message:"all fields are required"});
}

const hashedPassword = bcryptjs.hashSync(password,32);
const newUser = new User({
    username,
    email,
    password:hashedPassword,
})

try {
    await newUser.save();
res.json('Sign up successfully');
} catch (error) {
res.status(500).json({message: error.message });
}
};