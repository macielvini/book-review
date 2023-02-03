import { badRequestError } from "../errors/bad-request-error";
import { notFoundError } from "../errors/not-found-error";
import { Review } from "../protocols/reviews-protocols";
import { create } from "../repositories/reviews-repository";
import { findBookById } from "./books-services";
import { findUserById } from "./users-services";

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
