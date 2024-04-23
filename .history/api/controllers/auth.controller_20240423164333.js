import { response } from "express";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
const {username , email, password} = req.body;
if (!username || !password || !email || username === '' || email === '' || password === '')
{
    
    return res.status(400).json({message:"all fields are required"});
}

const newUser = new User({
    username,
    email,
    password
})
await newUser.save();
res.json({message:'Sign up successfully'});
};