import { conflictError } from "../errors/conflict-error.js";
import { create, findUserByName } from "../repositories/users-repository.js";

export async function createUser(name: string, image: string) {
  const nameExists = await findUserByName(name);

  if (nameExists?.name) {
    throw conflictError("user name already exists");
  }

  return await create(name, image);
}
