import { prisma } from "../database/server.js";
import { User, UserEntity } from "../protocols/users-protocols.js";

export async function findUserByName(name: string): Promise<UserEntity> {
  const data = await prisma.user.findFirst({
    where: { name: name },
  });

  return data;
}

export async function findById(id: number): Promise<UserEntity> {
  const data = await prisma.user.findUnique({ where: { id: id } });

  return data;
}

export async function create(user: User): Promise<UserEntity> {
  const data = await prisma.user.create({
    data: {
      name: user.name,
      image: user.image,
    },
  });
  return data;
}
