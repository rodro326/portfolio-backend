import { Router } from "express";
import { SkillControllers } from "./skill.controller";
import { SkillValidations } from "./skill.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = Router();

router.post(
  "/",
  validateRequest(SkillValidations.createSkillValidationSchema),
  SkillControllers.createSkill
);

router.get("/", SkillControllers.getAllSkills);

router.put(
  "/:id",
  validateRequest(SkillValidations.updateSkillValidationSchema),
  SkillControllers.updateSkill
);

router.delete("/:id", SkillControllers.deleteSkill);

export const SkillRoutes = router;