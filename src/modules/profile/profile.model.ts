import { Schema, model } from "mongoose";

export interface IProfile {
  name: string;
  title: string;
  bio: string;
  profileImage?: string;
  location: string;
  email: string;
  github?: string;
  linkedin?: string;
  availability: string;
}

const profileSchema = new Schema<IProfile>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    bio: {
      type: String,
      required: [true, "Bio is required"],
      trim: true,
    },
    profileImage: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    github: {
      type: String,
      trim: true,
    },
    linkedin: {
      type: String,
      trim: true,
    },
    availability: {
      type: String,
      default: "Open to opportunities",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Profile = model<IProfile>("Profile", profileSchema);

export default Profile;