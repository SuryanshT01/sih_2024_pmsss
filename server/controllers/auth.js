import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js"

//Register user
export const register = async (req,res) => {
    try {
        const {name,email,password,role} = req.body;
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password,salt);
        const newUser = new User({name,email,password:passwordHash,role})
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

// Log In
export const login = async(req,res) => {
    try {
        const {email,password} = req.body
        const user = await User.findOne({email: email})
        if (!user) return res.status(400).json({msg:"user does not exist"})

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({msg:"Invalid Credentials"})
        const token = jwt.sign({id:user.id}, process.env.JWT_SECRET)
        delete user.password;
        res.status(200).json({token,user})

    } catch (error) {
        res.status(500).json({error: error.message}) 
    }
}