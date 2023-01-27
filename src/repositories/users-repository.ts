import { prisma } from "../database/server.js";
import { UserEntity } from "../protocols/users-protocols.js";

export async function findUserByName(name: string) {
  return await prisma.user.findFirst({
    where: { name: name },
  });
}

export async function create(name: string, image: string): Promise<UserEntity> {
  const data = await prisma.user.create({
    data: {
      name: name,
      image: image,
    },
  });
  return data;
}
