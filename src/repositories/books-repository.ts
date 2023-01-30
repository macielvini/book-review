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

export type BookReviewed = {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
};

export async function findAll(): Promise<BookReviewed[]> {
  const data = prisma.$queryRaw<BookReviewed[]>`
    select b.*,avg(r.rating)::float as "avgRating"
    from books b
    left join reviews r
    on b.id = r.book_id
    group by b.id;`;

  return data;
}

export async function findById(id: number): Promise<BookEntity | null> {
  return await prisma.book.findFirst({ where: { id: id } });
}
