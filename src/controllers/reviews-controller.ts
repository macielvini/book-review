import { Request, Response } from "express";
import { Review } from "../protocols/reviews-protocols.js";
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
