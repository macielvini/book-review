import joi from "joi";

export const reviewSchema = joi.object({
  bookId: joi.number().required().greater(0),
  userId: joi.number().required().greater(0),
  comment: joi.string().max(1000).required(),
  rating: joi.number().greater(-1).less(6).required(),
});
