import { IContact } from "./contact.model";
import Contact from "./contact.model";

const createContactMessage = async (payload: IContact) => {
  const result = await Contact.create(payload);
  return result;
};

export const ContactServices = {
  createContactMessage,
};