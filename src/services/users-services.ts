import { create } from "../repositories/users-repository.js";

export async function createUser(name: string, image: string) {
  return await create(name, image);
}
