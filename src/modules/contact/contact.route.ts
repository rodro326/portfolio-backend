import { Router } from "express";
import { ContactControllers } from "./contact.controller";
import { ContactValidations } from "./contact.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = Router();

router.post(
  "/",
  validateRequest(ContactValidations.createContactValidationSchema),
  ContactControllers.createContactMessage
);

router.get("/", ContactControllers.getAllContactMessages);
router.put("/:id", ContactControllers.updateContactMessage);
router.delete("/:id", ContactControllers.deleteContactMessage);

export const ContactRoutes = router;