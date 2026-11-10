import { z } from "zod";

const createProfileValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required").trim(),

    title: z.string().min(1, "Title is required").trim(),

    bio: z.string().min(1, "Bio is required").trim(),

    profileImage: z
      .string()
      .url("Please provide a valid profile image URL")
      .optional()
      .or(z.literal("")),

    location: z.string().min(1, "Location is required").trim(),

    email: z
      .string()
      .email("Please provide a valid email address")
      .trim()
      .toLowerCase(),

    github: z
      .string()
      .url("Please provide a valid GitHub URL")
      .optional()
      .or(z.literal("")),

    linkedin: z
      .string()
      .url("Please provide a valid LinkedIn URL")
      .optional()
      .or(z.literal("")),

    availability: z.string().trim().optional(),
  }),
});

const updateProfileValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name cannot be empty").trim().optional(),
    title: z.string().min(1, "Title cannot be empty").trim().optional(),
    bio: z.string().min(1, "Bio cannot be empty").trim().optional(),
    profileImage: z.string().url().optional().or(z.literal("")),
    location: z.string().min(1, "Location cannot be empty").trim().optional(),
    email: z.string().email("Please provide a valid email address").trim().toLowerCase().optional(),
    github: z.string().url().optional().or(z.literal("")),
    linkedin: z.string().url().optional().or(z.literal("")),
    availability: z.string().trim().optional(),
  }),
});

export const ProfileValidations = {
  createProfileValidationSchema,
  updateProfileValidationSchema,
};