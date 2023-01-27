export type BookEntity = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export type Book = Omit<BookEntity, "id">;
