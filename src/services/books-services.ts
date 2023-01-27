import { create } from "../repositories/books-repository.js";

export async function createBook(
  title: string,
  description: string,
  image: string
) {
  return await create(title, description, image);
}
