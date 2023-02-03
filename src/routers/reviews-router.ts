import { Router } from "express";
import { getUserReviews, postReview } from "../controllers/reviews-controller";
import { validateSchema } from "../middlewares/validateSchema";
import { reviewSchema } from "../models/reviews-schema";

export const reviewsRouter = Router();

reviewsRouter
  .post("/reviews", validateSchema(reviewSchema), postReview)
  .get("/reviews", getUserReviews);
