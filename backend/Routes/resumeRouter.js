import { Router } from "express";
import { createResume, deleteResume, getResume, updateResume, updateTitle } from "../Controllers/resumeController.js";
import getMe from "../Middelware/authMiddleware.js";

const resumeRouter = Router()


// POST A RESUME
resumeRouter.post("/create",getMe,createResume)

// ROUTE TO GET ALL RESUMES
resumeRouter.get("/get",getMe,getResume)

// ROUTE TO UPDATE RESUME TITLE
resumeRouter.put("/update-title/:resumeId",getMe,updateTitle)

// ROUTE TO UPDATE RESUME
resumeRouter.put("/update/:resumeId",getMe,updateResume)

// ROUTE TO DELETE RESUME
resumeRouter.delete("/delete/:resumeId",getMe,deleteResume)

export default resumeRouter