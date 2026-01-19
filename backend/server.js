import "dotenv/config"
import express from "express"
import cors from "cors"
import connectDatabase from "./Config/dbConfig.js"
import authRouter from "./Routes/authRouter.js"
import resumeRouter from "./Routes/resumeRouter.js"

// APP CONFIG
const app = express()

// BASIC MIDDLEWARE
app.use(express.json())
app.use(cors())

// DATABASE CONNECTION
await connectDatabase()

// ROUTING
app.use("/api/auth",authRouter)
app.use("/api/resumes",resumeRouter)

// PORT
const PORT  = process.env.PORT 

// RUNNING SERVER 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
