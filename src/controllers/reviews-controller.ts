import { Request, Response } from "express";
import { unauthorizedError } from "../errors/unauthorized-error.js";
import { Review } from "../protocols/reviews-protocols.js";
import { findUserReviews } from "../repositories/reviews-repository.js";
import { createReview } from "../services/reviews-services.js";

export async function postReview(req: Request, res: Response) {
  const body = req.body as Review;
  const { bookId, userId, comment, rating } = body;

  try {
    await createReview(bookId, userId, comment, rating);

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    if (error.name === "NotFoundError") {
      return res.status(404).send(error);
    }
    res.sendStatus(500);
  }
}

export async function getUserReviews(req: Request, res: Response) {
  const id = req.query?.user;

  try {
    if (!id) {
      throw unauthorizedError("user id is required");
    }

    const data = await findUserReviews(Number(id));
    res.send(data);
  } catch (error) {
    console.log(error);

    if (error.name === "UnauthorizedError") return res.status(401).send(error);
    res.status(500);
  }
}
