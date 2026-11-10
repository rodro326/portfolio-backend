import { z } from "zod";

const createProjectValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Project title is required").trim(),

    description: z
      .string()
      .min(1, "Project description is required")
      .trim(),

    technologies: z
      .array(z.string().min(1, "Technology cannot be empty"))
      .min(1, "At least one technology is required"),

    image: z.string().url("Please provide a valid image URL").optional().or(z.literal("")),

    liveDemo: z
      .string()
      .url("Please provide a valid live demo URL")
      .optional()
      .or(z.literal("")),

    github: z
      .string()
      .url("Please provide a valid GitHub URL")
      .optional()
      .or(z.literal("")),

    featured: z.boolean().optional(),
  }),
});

const updateProjectValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Project title cannot be empty").trim().optional(),
    description: z.string().min(1, "Description cannot be empty").trim().optional(),
    technologies: z
      .array(z.string().min(1))
      .min(1, "At least one technology is required")
      .optional(),
    image: z.string().url().optional().or(z.literal("")),
    liveDemo: z.string().url().optional().or(z.literal("")),
    github: z.string().url().optional().or(z.literal("")),
    featured: z.boolean().optional(),
  }),
});

export const ProjectValidations = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};