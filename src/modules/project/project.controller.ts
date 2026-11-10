import { Request, Response } from "express";
import { ProjectServices } from "./project.service";

const createProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await ProjectServices.createProject(req.body);

    res.status(201).json({
      success: true,
      message: "Project created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create project!",
      error,
    });
  }
};

const getAllProjects = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await ProjectServices.getAllProjects();

    res.status(200).json({
      success: true,
      message: "Projects retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve projects!",
      error,
    });
  }
};

const updateProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await ProjectServices.updateProject(
      req.params.id as string,
      req.body
    );

    if (!result) {
      res.status(404).json({
        success: false,
        message: "Project not found!",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Project updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update project!",
      error,
    });
  }
};

const deleteProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await ProjectServices.deleteProject(req.params.id as string);

    if (!result) {
      res.status(404).json({
        success: false,
        message: "Project not found!",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Project deleted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete project!",
      error,
    });
  }
};

export const ProjectControllers = {
  createProject,
  getAllProjects,
  updateProject,
  deleteProject,
};