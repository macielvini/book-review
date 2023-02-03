import { conflictError } from "../errors/conflict-error";
import { Book } from "../protocols/books-protocols";
import {
  create,
  findAll,
  findById,
  findByTitle,
} from "../repositories/books-repository";

export async function createBook(book: Book) {
  const bookExists = await findByTitle(book.title);

  if (bookExists?.id) {
    throw conflictError("book title already exists");
  }

  return await create(book);
}

export async function findAllBooks() {
  return await findAll();
}

export async function findBookById(id: number) {
  return await findById(id);
}
