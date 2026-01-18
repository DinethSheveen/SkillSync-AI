
import { Router } from "express"
import { getUserById, login, register } from "../Controllers/authController.js"
import getMe from "../Middelware/authMiddleware.js"

const authRouter = Router()

// REGISTER ROUTER
authRouter.post("/register",register)

// LOGIN ROUTER
authRouter.post("/login",login)

// USER AUTHENTICATING ROUTER
authRouter.get("/authenticate",getMe,getUserById)

export default authRouter