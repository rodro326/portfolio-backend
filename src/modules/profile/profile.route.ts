import { Router } from "express";
import { ProfileControllers } from "./profile.controller";

const router = Router();

router.post("/", ProfileControllers.createProfile);
router.get("/", ProfileControllers.getProfile);
router.put("/", ProfileControllers.updateProfile);

export const ProfileRoutes = router;