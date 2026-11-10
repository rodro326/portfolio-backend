import Contact, { IContact } from "./contact.model";

const createContactMessage = async (payload: IContact) => {
  const result = await Contact.create(payload);
  return result;
};

const getAllContactMessages = async () => {
  const result = await Contact.find().sort({ createdAt: -1 });
  return result;
};

const updateContactMessage = async (
  id: string,
  payload: Partial<IContact>
) => {
  const result = await Contact.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteContactMessage = async (id: string) => {
  const result = await Contact.findByIdAndDelete(id);
  return result;
};

export const ContactServices = {
  createContactMessage,
  getAllContactMessages,
  updateContactMessage,
  deleteContactMessage,
};