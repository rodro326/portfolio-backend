import { Schema, model } from "mongoose";

export interface ISkill {
  name: string;
  category: "Frontend" | "Backend" | "Tools";
  icon?: string;
}

const skillSchema = new Schema<ISkill>(
  {
    name: {
      type: String,
      required: [true, "Skill name is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Skill category is required"],
      enum: ["Frontend", "Backend", "Tools"],
    },
    icon: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Skill = model<ISkill>("Skill", skillSchema);

export default Skill;