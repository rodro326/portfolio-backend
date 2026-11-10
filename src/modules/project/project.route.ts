import { Router } from "express";
import { ProjectControllers } from "./project.controller";
import validateRequest from "../../middlewares/validateRequest";
import { ProjectValidations } from "./project.validation";

const router = Router();

router.post(
  "/",
  validateRequest(ProjectValidations.createProjectValidationSchema),
  ProjectControllers.createProject
);

router.put(
  "/:id",
  validateRequest(ProjectValidations.updateProjectValidationSchema),
  ProjectControllers.updateProject
);
router.get("/", ProjectControllers.getAllProjects);
router.put("/:id", ProjectControllers.updateProject);
router.delete("/:id", ProjectControllers.deleteProject);

export const ProjectRoutes = router;