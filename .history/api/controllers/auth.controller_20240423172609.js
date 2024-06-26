import { response } from "express";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"

export const signup = async (req, res , next) => {
const {username , email, password} = req.body;
if (!username || !password || !email || username === '' || email === '' || password === '')
{
next(errorHandler(400 , 'all fields are required'));   

}

const hashedPassword = bcryptjs.hashSync(password,10);
const newUser = new User({
    username,
    email,
    password:hashedPassword,
})

try {
    await newUser.save();
res.json('Sign up successfully');
} catch (error) {
    next(error);
}
};