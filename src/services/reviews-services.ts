import { create } from "../repositories/reviews-repository.js";

export async function createReview(
  bookId: number,
  userId: number,
  comment: string,
  rating: number
) {
  return await create(bookId, userId, comment, rating);
}
