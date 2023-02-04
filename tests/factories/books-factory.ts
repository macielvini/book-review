import { faker } from "@faker-js/faker";
import { prisma } from "config/database";
import { UserEntity } from "protocols";
import { BookEntity } from "protocols/books-protocols";
import { BookReviewed } from "repositories/books-repository";
import { createUser } from "./users-factory";

export async function createBook() {
  return await prisma.book.create({
    data: {
      description: faker.lorem.paragraph(),
      image: faker.image.abstract(),
      title: faker.lorem.word(),
    },
  });
}

export async function createReview(user: UserEntity, book: BookEntity) {
  console.log(user, book);
  return await prisma.review.create({
    data: {
      comment: faker.lorem.sentence(),
      rating: faker.datatype.number({ min: 0, max: 5 }),
      book: { connect: { id: book.id } },
      user: { connect: { id: user.id } },
    },
  });
}
