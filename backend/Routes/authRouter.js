
import { Router } from "express"
import { login, register } from "../Controllers/authController.js"

const authRouter = Router()

// REGISTER ROUTER
authRouter.post("/register",register)

// LOGIN ROUTER
authRouter.post("/login",login)

export default authRouter