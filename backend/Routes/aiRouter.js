import { Router } from "express";
import { enhanceJobDescription, enhanceSummary, uploadResume } from "../Controllers/aiController.js";
import getMe from "../Middelware/authMiddleware.js";

const aiRouter = Router();

aiRouter.post("/summary",getMe,enhanceSummary)
aiRouter.post("/job-description",getMe,enhanceJobDescription)
aiRouter.post("/upload-resume",getMe,uploadResume)

export default aiRouter;
