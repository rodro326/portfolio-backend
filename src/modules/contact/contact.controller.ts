import { Request, Response } from "express";
import { ContactServices } from "./contact.service";

const createContactMessage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await ContactServices.createContactMessage(req.body);

    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error,
    });
  }
};

const getAllContactMessages = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await ContactServices.getAllContactMessages();

    res.status(200).json({
      success: true,
      message: "Messages retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve messages!",
      error,
    });
  }
};

const updateContactMessage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await ContactServices.updateContactMessage(
      req.params.id as string,
      req.body
    );

    if (!result) {
      res.status(404).json({
        success: false,
        message: "Message not found!",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Message updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update message!",
      error,
    });
  }
};

const deleteContactMessage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await ContactServices.deleteContactMessage(req.params.id as string);

    if (!result) {
      res.status(404).json({
        success: false,
        message: "Message not found!",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Message deleted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete message!",
      error,
    });
  }
};

export const ContactControllers = {
  createContactMessage,
  getAllContactMessages,
  updateContactMessage,
  deleteContactMessage,
};