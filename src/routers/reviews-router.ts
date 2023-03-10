import { Router } from "express";
import {
  getUserReviews,
  postReview,
} from "../controllers/reviews-controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { reviewSchema } from "../models/reviews-schema.js";

export const reviewsRouter = Router();

reviewsRouter
  .post("/reviews", validateSchema(reviewSchema), postReview)
  .get("/reviews", getUserReviews);
