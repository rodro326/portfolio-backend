import { Router } from "express";
import { ContactControllers } from "./contact.controller";

const router = Router();

router.post("/", ContactControllers.createContactMessage);
router.get("/", ContactControllers.getAllContactMessages);
router.put("/:id", ContactControllers.updateContactMessage);
router.delete("/:id", ContactControllers.deleteContactMessage);

export const ContactRoutes = router;