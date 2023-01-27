import { conflictError } from "../errors/conflict-error.js";
import {
  create,
  findUserByName,
  findById,
} from "../repositories/users-repository.js";

export async function createUser(name: string, image: string) {
  const nameExists = await findUserByName(name);

  if (nameExists?.name) {
    throw conflictError("user name already exists");
  }

  return await create(name, image);
}

export async function findUserById(id: number) {
  return await findById(id);
}
