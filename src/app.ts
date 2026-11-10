import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ContactRoutes } from "./modules/contact/contact.route";
import { ProjectRoutes } from "./modules/project/project.route";
import { ExperienceRoutes } from "./modules/experience/experience.route";
import { ProfileRoutes } from "./modules/profile/profile.route";
import { SkillRoutes } from "./modules/skill/skill.route";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/v1/contact", ContactRoutes);
app.use("/api/v1/projects", ProjectRoutes);
app.use("/api/v1/skills", SkillRoutes);
app.use("/api/v1/experiences", ExperienceRoutes);
app.use("/api/v1/profile", ProfileRoutes);
app.use(globalErrorHandler);

// Test Route
app.get("/", (req: Request, res: Response) => {
  res.send("Portfolio Backend is running!");
});

export default app;