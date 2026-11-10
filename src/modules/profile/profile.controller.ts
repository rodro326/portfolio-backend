import { Request, Response } from "express";
import { ProfileServices } from "./profile.service";

const createProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await ProfileServices.createProfile(req.body);

    res.status(201).json({
      success: true,
      message: "Profile created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create profile!",
      error,
    });
  }
};

const getProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await ProfileServices.getProfile();

    res.status(200).json({
      success: true,
      message: "Profile retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve profile!",
      error,
    });
  }
};

const updateProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await ProfileServices.updateProfile(req.body);

    if (!result) {
      res.status(404).json({
        success: false,
        message: "Profile not found!",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Profile updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update profile!",
      error,
    });
  }
};

export const ProfileControllers = {
  createProfile,
  getProfile,
  updateProfile,
};