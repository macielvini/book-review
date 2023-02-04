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
  const data = await prisma.$queryRaw<BookReviewed[]>`
    select b.*,
    json_build_object(
       'rating', COALESCE(avg(r.rating)::float, 0),
       'count', count(r.book_id)
    ) as "review"
    from books b
    left join reviews r
    on b.id = r.book_id
    group by b.id;`;

  console.log(data);
  return data;
}

export async function findById(id: number): Promise<BookEntity | null> {
  return await prisma.book.findFirst({ where: { id: id } });
}
