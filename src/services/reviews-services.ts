import { badRequestError } from "../errors/bad-request-error.js";
import { notFoundError } from "../errors/not-found-error.js";
import { Review } from "../protocols/reviews-protocols.js";
import { create } from "../repositories/reviews-repository.js";
import { findBookById } from "./books-services.js";
import { findUserById } from "./users-services.js";

export async function createReview(review: Review) {
  const { userId, bookId, comment, rating } = review;

  if (rating < 0 || rating > 5) throw badRequestError("invalid rating");

  const userExists = await findUserById(userId);

  if (!userExists) {
    throw notFoundError("user not found");
  }

  const bookExists = await findBookById(bookId);

  if (!bookExists) {
    throw notFoundError("book not found");
  }

  return await create(review);
}
