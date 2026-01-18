import jwt  from "jsonwebtoken"
import "dotenv/config"

const createToken = (id)=>{
    const token =  jwt.sign({id},process.env.SECRET_KEY,{expiresIn : "1d"})
    return token
}

export default createToken