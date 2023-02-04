import { faker } from "@faker-js/faker";
import { prisma } from "config/database";
import { UserEntity } from "protocols";

export async function createUser(): Promise<UserEntity> {
  return await prisma.user.create({
    data: {
      image: faker.image.avatar(),
      name: faker.name.firstName(),
    },
  });
}
