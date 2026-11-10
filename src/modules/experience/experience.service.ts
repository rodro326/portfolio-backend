import Experience, { IExperience } from "./experience.model";

const createExperience = async (payload: IExperience) => {
  const result = await Experience.create(payload);
  return result;
};

const getAllExperiences = async () => {
  const result = await Experience.find().sort({ startDate: -1 });
  return result;
};

const updateExperience = async (
  id: string,
  payload: Partial<IExperience>
) => {
  const result = await Experience.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteExperience = async (id: string) => {
  const result = await Experience.findByIdAndDelete(id);
  return result;
};

export const ExperienceServices = {
  createExperience,
  getAllExperiences,
  updateExperience,
  deleteExperience,
};