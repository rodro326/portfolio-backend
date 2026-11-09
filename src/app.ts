import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ContactRoutes } from "./modules/contact/contact.route";

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/v1/contact", ContactRoutes);
// Test Route
app.get("/", (req: Request, res: Response) => {
  res.send("Portfolio Backend is running!");
});

export default app;