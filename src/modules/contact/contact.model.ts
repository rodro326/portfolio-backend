import { Schema, model } from "mongoose";

export interface IContact {
  name: string;
  email: string;
  message: string;
}

const contactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Contact = model<IContact>("Contact", contactSchema);

export default Contact;