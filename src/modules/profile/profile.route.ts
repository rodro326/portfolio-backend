import { Router } from "express";
import { ProfileControllers } from "./profile.controller";
import { ProfileValidations } from "./profile.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = Router();

router.post(
  "/",
  validateRequest(ProfileValidations.createProfileValidationSchema),
  ProfileControllers.createProfile
);

router.get("/", ProfileControllers.getProfile);

router.put(
  "/",
  validateRequest(ProfileValidations.updateProfileValidationSchema),
  ProfileControllers.updateProfile
);

export const ProfileRoutes = router;