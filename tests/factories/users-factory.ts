import { faker } from "@faker-js/faker";
import { prisma } from "config/database";

export async function createUser() {
  return await prisma.user.create({
    data: {
      image: faker.image.avatar(),
      name: faker.name.firstName(),
    },
  });
}
