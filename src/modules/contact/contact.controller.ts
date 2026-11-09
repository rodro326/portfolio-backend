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

export const ContactControllers = {
  createContactMessage,
};