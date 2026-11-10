import { Schema, model } from "mongoose";

export interface IProject {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveDemo?: string;
  github?: string;
  featured: boolean;
}

const projectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Project description is required"],
      trim: true,
    },
    technologies: {
      type: [String],
      required: [true, "Technologies are required"],
    },
    image: {
      type: String,
      trim: true,
    },
    liveDemo: {
      type: String,
      trim: true,
    },
    github: {
      type: String,
      trim: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Project = model<IProject>("Project", projectSchema);

export default Project;