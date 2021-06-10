import { User } from './user';

export const createUser = async (model: any) => {
  await User.create(model);
};
