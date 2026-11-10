import { Request, Response } from "express";
import { SkillServices } from "./skill.service";

const createSkill = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await SkillServices.createSkill(req.body);

    res.status(201).json({
      success: true,
      message: "Skill created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create skill!",
      error,
    });
  }
};

const getAllSkills = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await SkillServices.getAllSkills();

    res.status(200).json({
      success: true,
      message: "Skills retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve skills!",
      error,
    });
  }
};

const updateSkill = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await SkillServices.updateSkill(req.params.id as string, req.body);

    if (!result) {
      res.status(404).json({
        success: false,
        message: "Skill not found!",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Skill updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update skill!",
      error,
    });
  }
};

const deleteSkill = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await SkillServices.deleteSkill(req.params.id as string);

    if (!result) {
      res.status(404).json({
        success: false,
        message: "Skill not found!",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Skill deleted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete skill!",
      error,
    });
  }
};

export const SkillControllers = {
  createSkill,
  getAllSkills,
  updateSkill,
  deleteSkill,
};