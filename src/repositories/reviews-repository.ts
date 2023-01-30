import { prisma } from "../database/server.js";
import { Review } from "../protocols/reviews-protocols.js";

export async function create(review: Review) {
  const { userId, bookId, comment, rating } = review;

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
