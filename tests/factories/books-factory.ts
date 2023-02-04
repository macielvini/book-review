import { faker } from "@faker-js/faker";
import { prisma } from "config/database";

export async function createBook() {
  return await prisma.book.create({
    data: {
      description: faker.lorem.lines(),
      image: faker.image.abstract(),
      title: faker.lorem.word(),
    },
  });
}
