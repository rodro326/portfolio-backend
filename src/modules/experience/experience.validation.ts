import { z } from "zod";

const createExperienceValidationSchema = z.object({
  body: z.object({
    company: z.string().min(1, "Company name is required").trim(),

    position: z.string().min(1, "Position is required").trim(),

    startDate: z.coerce.date({
      error: "A valid start date is required",
    }),

    endDate: z.coerce.date().optional(),

    description: z.string().min(1, "Description is required").trim(),

    current: z.boolean().optional(),
  }),
});

const updateExperienceValidationSchema = z.object({
  body: z.object({
    company: z.string().min(1, "Company name cannot be empty").trim().optional(),

    position: z.string().min(1, "Position cannot be empty").trim().optional(),

    startDate: z.coerce.date().optional(),

    endDate: z.coerce.date().optional(),

    description: z.string().min(1, "Description cannot be empty").trim().optional(),

    current: z.boolean().optional(),
  }),
});

export const ExperienceValidations = {
  createExperienceValidationSchema,
  updateExperienceValidationSchema,
};