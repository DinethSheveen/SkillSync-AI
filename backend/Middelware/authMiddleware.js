import jwt from "jsonwebtoken"
import "dotenv/config"

// GET ME FUNCTION TO VALIDATE THE USER
const getMe = (req,res,next)=>{
    const token = req.headers.authorization

    if(!token){
        return res.status(400).json({message : "Unauthorized user"})
    }

    try {
        const decoded = jwt.verify(token,process.env.SECRET_KEY)
        req.userId = decoded.id  
        
        next();
    } catch (error) {
        return res.status(400).json({message : "Unauthorized user"})
    }
}

export default getMe