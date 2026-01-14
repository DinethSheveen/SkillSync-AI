import "dotenv/config"
import express from "express"
import cors from "cors"
import connectDatabase from "./Config/dbConfig.js"

// APP CONFIG
const app = express()
app.use(cors())

// DATABASE CONNECTION
connectDatabase()

// PORT
const PORT  = process.env.PORT 

// RUNNING SERVER 
app.listen((PORT,()=>{
    console.log(`Sever is running on http://localhost:${PORT}`);
}))

