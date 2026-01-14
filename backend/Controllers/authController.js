import { userModel } from "../Models/userModel.js"
import validator from "validator"
import bcrypt from "bcryptjs"
import createToken from "../Config/jwt.js"

// REGISTER ENDPOINT
export const register = async (req,res)=>{
    const {name, email, password} = req.body

    // IF ANY OF THE FIELDS AREN'T FILLED
    if(!name || !email || !password){
        return res.status(400).json({message : "Please fill in all required fields"})
    }

    // IF EITHER OF THE NAME OR PASSWORD IS TOO SHORT
    if(name.length<5){
        return res.status(400).json({message : "Name is too short"})
    }
    
    if(password.length<5){
        return res.status(400).json({message : "Password is too short"})
    }

    // IF THE EMAIL IS NOT IN THE REQUIRED FORMAT
    if(!validator.isEmail(email)){
        return res.status(400).json({message : "Invalid email format"})
    }

    try {
        // IF THE USER ALREADY EXISTS
        const existingUser = await userModel.findOne({email})
        
        if(existingUser){
            return res.status(400).json({message : "User with this email already exists"})
        }

        // CREATING A NEW USER WITH HASH-PASSWORD
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)

        const newUser = await userModel.create({name,email,password : hashPassword}) 

        console.log(newUser);
        res.status(201).json({message : "Account created successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Server Error"})
    }
}

// LOGIN ENDPOINT
export const login = async (req,res)=>{
    const {email,password} = req.body

    // IF EITHER OF THE EMAIL OR THE PASSWORD ISN'T AVAILABLE
    if(!email || !password){
        return res.status(400).json({message : "Please fill in all the fields to login"})
    }

   try {
        // IF THE USER ISN'T REGISTERED
        const registeredUser = await userModel.findOne({email})
        
        if(!registeredUser){
            return res.status(400).json({message : "Invalid credentials."})
        }

        // DECRYPTING THE PASSWORD AND CHECKING THE VALIDITY
        const matchingPassword = await bcrypt.compare(password,registeredUser.password)
        
        if(!matchingPassword){
            return res.status(400).json({message : "Invalid credentials"})
        }

        const token = createToken(registeredUser._id)
        res.status(200).json({message : "Logging in",token})
   } catch (error) {
        res.status(500).json({message : "Server Error"})
   }
}