import { Router } from "express";
import { ProjectControllers } from "./project.controller";

const router = Router();

router.post("/", ProjectControllers.createProject);
router.get("/", ProjectControllers.getAllProjects);
router.put("/:id", ProjectControllers.updateProject);
router.delete("/:id", ProjectControllers.deleteProject);

export const ProjectRoutes = router;