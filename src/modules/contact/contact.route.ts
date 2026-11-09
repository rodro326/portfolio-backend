import { Router } from "express";
import { ContactControllers } from "./contact.controller";

const router = Router();

router.post("/", ContactControllers.createContactMessage);

export const ContactRoutes = router;