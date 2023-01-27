import { prisma } from "../database/server.js";
import { BookEntity } from "../protocols/books-protocols.js";

export async function create(
  title: string,
  description: string,
  image: string
): Promise<BookEntity> {
  return await prisma.book.create({ data: { title, description, image } });
}

export async function findByTitle(title: string): Promise<BookEntity> {
  const data = await prisma.book.findFirst({ where: { title: title } });
  return data;
}

export async function findAll(): Promise<BookEntity[]> {
  const data = await prisma.book.findMany();
  return data;
}

export async function findById(id: number): Promise<BookEntity | null> {
  return await prisma.book.findFirst({ where: { id: id } });
}
