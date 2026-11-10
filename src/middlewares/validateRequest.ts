import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

const validateRequest =
  (schema: ZodSchema) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.parseAsync({
        body: req.body,
      });

      next();
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Validation failed!",
        error,
      });
    }
  };

export default validateRequest;