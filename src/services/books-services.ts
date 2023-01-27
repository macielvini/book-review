import { conflictError } from "../errors/conflict-error.js";
import { create, findByTitle } from "../repositories/books-repository.js";

export async function createBook(
  title: string,
  description: string,
  image: string
) {
  const bookExists = await findByTitle(title);

  if (bookExists?.id) {
    throw conflictError("book title already exists");
  }

  return await create(title, description, image);
}
