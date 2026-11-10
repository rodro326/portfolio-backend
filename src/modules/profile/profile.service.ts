import Profile, { IProfile } from "./profile.model";

const createProfile = async (payload: IProfile) => {
  const result = await Profile.create(payload);
  return result;
};

const getProfile = async () => {
  const result = await Profile.findOne().sort({ createdAt: -1 });
  return result;
};

const updateProfile = async (payload: Partial<IProfile>) => {
  const profile = await Profile.findOne().sort({ createdAt: -1 });

  if (!profile) {
    return null;
  }

  const result = await Profile.findByIdAndUpdate(profile._id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

export const ProfileServices = {
  createProfile,
  getProfile,
  updateProfile,
};