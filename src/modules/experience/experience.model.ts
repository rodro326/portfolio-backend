import { Schema, model } from "mongoose";

export interface IExperience {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  current: boolean;
}

const experienceSchema = new Schema<IExperience>(
  {
    company: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
    },
    position: {
      type: String,
      required: [true, "Position is required"],
      trim: true,
    },
    startDate: {
      type: Date,
      required: [true, "Start date is required"],
    },
    endDate: {
      type: Date,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    current: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Experience = model<IExperience>("Experience", experienceSchema);

export default Experience;