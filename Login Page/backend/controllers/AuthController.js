import userModel from './../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
export const signup = async (req, res) => {
    try{
        const { name, email, password } = req.body;
        const user = await userModel.findOne({email});
        if(user){
            return res.status(409).json({ message: 'User already exists' });
        }
        const newUser = new userModel({name,email,password});
        newUser.password = await bcrypt.hash(password,10);
        await newUser.save();
        return res.status(201)
        .json({
            message: 'User registered successfully',
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        })
    }
    catch(error){
        return res.status(500).json({ message: 'Server error', success: false });
    }
}
export const login = async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(409).json({ message: 'User does not exists' });
        }
        const isPassEqual = bcrypt.compare(password,user.password);
        if(!isPassEqual)
            return res.status(201).json({
                message: "Invalid id or password"
            }
        )
        const jwtToken = jwt.sign({
            email:user.email, _id : user._id},
            process.env.JWT_SECRET,
            {expiresIn:'24h'}
        )
        return res.status(200)
        .json({
            message: 'User logged in successfully',
            email:email,
            token:jwtToken,
            name:user.name
        })
    }
    catch(error){
        return res.status(500).json({ message: 'Server error', success: false });
    }
}