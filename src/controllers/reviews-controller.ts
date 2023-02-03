import { Request, Response } from "express";
import { unauthorizedError } from "../errors/unauthorized-error";
import { Review } from "../protocols/reviews-protocols";
import { findUserReviews } from "../repositories/reviews-repository";
import { createReview } from "../services/reviews-services";

export async function postReview(req: Request, res: Response) {
  const body = req.body as Review;

  try {
    await createReview(body);

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    if (error.name === "NotFoundError") {
      return res.status(404).send(error);
    }

    if (error.name === "BadRequestError") {
      return res.status(400).send(error);
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
