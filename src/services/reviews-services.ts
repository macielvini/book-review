import { NotFoundError } from "@prisma/client/runtime/index.js";
import { notFoundError } from "../errors/not-found-error.js";
import { create } from "../repositories/reviews-repository.js";
import { findBookById } from "./books-services.js";
import { findUserById } from "./users-services.js";

export async function createReview(
  bookId: number,
  userId: number,
  comment: string,
  rating: number
) {
  const userExists = await findUserById(userId);

  if (!userExists) {
    throw notFoundError("user not found");
  }

  const bookExists = await findBookById(bookId);

  if (!bookExists) {
    throw notFoundError("book not found");
  }

  return await create(bookId, userId, comment, rating);
}
