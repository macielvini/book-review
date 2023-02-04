import { prisma } from "../config/database";
import { Book, BookEntity } from "../protocols/books-protocols";

export async function create(book: Book): Promise<BookEntity> {
  return await prisma.book.create({ data: book });
}

export async function findByTitle(title: string): Promise<BookEntity> {
  const data = await prisma.book.findFirst({
    where: { title: { equals: title } },
  });
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
