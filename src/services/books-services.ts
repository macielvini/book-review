import { conflictError } from "../errors/conflict-error.js";
import {
  create,
  findAll,
  findById,
  findByTitle,
} from "../repositories/books-repository.js";

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

export async function findAllBooks() {
  return await findAll();
}

export async function findBookById(id: number) {
  return await findById(id);
}
