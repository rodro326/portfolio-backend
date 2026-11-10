import { z } from "zod";

const createContactValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        error: "Name is required",
      })
      .min(1, "Name cannot be empty")
      .trim(),

    email: z
      .string({
        error: "Email is required",
      })
      .email("Please provide a valid email address")
      .trim()
      .toLowerCase(),

    message: z
      .string({
        error: "Message is required",
      })
      .min(1, "Message cannot be empty")
      .trim(),
  }),
});

export const ContactValidations = {
  createContactValidationSchema,
};