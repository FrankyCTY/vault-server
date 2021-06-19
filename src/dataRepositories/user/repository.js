import { User } from './user'

export const createUser = async (model) => {
  await User.create(model)
}
