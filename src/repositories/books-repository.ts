import { prisma } from "../database/server.js";
import { BookEntity } from "../protocols/books-protocols.js";

export async function create(
  title: string,
  description: string,
  image: string
): Promise<BookEntity> {
  return await prisma.book.create({ data: { title, description, image } });
}
