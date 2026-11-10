import { Router } from "express";
import { ExperienceControllers } from "./experience.controller";

const router = Router();

router.post("/", ExperienceControllers.createExperience);
router.get("/", ExperienceControllers.getAllExperiences);
router.put("/:id", ExperienceControllers.updateExperience);
router.delete("/:id", ExperienceControllers.deleteExperience);

export const ExperienceRoutes = router;