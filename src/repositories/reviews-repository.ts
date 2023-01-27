import { prisma } from "../database/server.js";

export async function create(
  bookId: number,
  userId: number,
  comment: string,
  rating: number
) {
  return await prisma.review.create({
    data: {
      comment,
      rating,
      book: { connect: { id: bookId } },
      user: { connect: { id: userId } },
    },
  });
}

export async function findUserReviews(id: number) {
  return await prisma.review.findMany({ where: { user: { is: { id: id } } } });
}
