import { Request, Response } from "express";
import { ExperienceServices } from "./experience.service";

const createExperience = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await ExperienceServices.createExperience(req.body);

    res.status(201).json({
      success: true,
      message: "Experience created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create experience!",
      error,
    });
  }
};

const getAllExperiences = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await ExperienceServices.getAllExperiences();

    res.status(200).json({
      success: true,
      message: "Experiences retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve experiences!",
      error,
    });
  }
};

const updateExperience = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await ExperienceServices.updateExperience(
      req.params.id as string,
      req.body
    );

    if (!result) {
      res.status(404).json({
        success: false,
        message: "Experience not found!",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Experience updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update experience!",
      error,
    });
  }
};

const deleteExperience = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await ExperienceServices.deleteExperience(req.params.id as string);

    if (!result) {
      res.status(404).json({
        success: false,
        message: "Experience not found!",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Experience deleted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete experience!",
      error,
    });
  }
};

export const ExperienceControllers = {
  createExperience,
  getAllExperiences,
  updateExperience,
  deleteExperience,
};