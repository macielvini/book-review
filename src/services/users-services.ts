import { conflictError } from "../errors/conflict-error.js";
import { User } from "../protocols/users-protocols.js";
import {
  create,
  findUserByName,
  findById,
} from "../repositories/users-repository.js";

export async function createUser(user: User) {
  const nameExists = await findUserByName(user.name);

  if (nameExists?.name) {
    throw conflictError("user name already exists");
  }

  return await create(user);
}

export async function findUserById(id: number) {
  return await findById(id);
}
