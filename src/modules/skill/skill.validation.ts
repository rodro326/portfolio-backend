import { z } from "zod";

const createSkillValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Skill name is required").trim(),

    category: z.enum(["Frontend", "Backend", "Tools"], {
      error: "Please select a valid skill category",
    }),

    icon: z.string().trim().optional().or(z.literal("")),
  }),
});

const updateSkillValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Skill name cannot be empty").trim().optional(),

    category: z
      .enum(["Frontend", "Backend", "Tools"], {
        error: "Please select a valid skill category",
      })
      .optional(),

    icon: z.string().trim().optional().or(z.literal("")),
  }),
});

export const SkillValidations = {
  createSkillValidationSchema,
  updateSkillValidationSchema,
};