import { Router } from "express";
import { SkillControllers } from "./skill.controller";

const router = Router();

router.post("/", SkillControllers.createSkill);
router.get("/", SkillControllers.getAllSkills);
router.put("/:id", SkillControllers.updateSkill);
router.delete("/:id", SkillControllers.deleteSkill);

export const SkillRoutes = router;