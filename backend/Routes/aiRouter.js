import { Router } from "express";
import { enhanceJobDescription, enhanceSummary } from "../Controllers/aiController.js";
import getMe from "../Middelware/authMiddleware.js";

const aiRouter = Router();

aiRouter.post("/summary",getMe,enhanceSummary)
aiRouter.post("/skills",getMe,enhanceJobDescription)

export default aiRouter;
