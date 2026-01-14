import mongoose from "mongoose"
import "dotenv/config"

const connectDatabase = async()=>{
    try {
        const mongoDbUri = process.env.MONGODB_URI
        const connect = await mongoose.connect(mongoDbUri)
        console.log("Connected to the database");
    } catch (error) {
        console.log("Error in connecting to the database");
    }
}

export default connectDatabase