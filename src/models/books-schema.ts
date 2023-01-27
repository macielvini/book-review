import joi from "joi";

export const bookSchema = joi.object({
  title: joi.string().max(100).required(),
  description: joi.string().max(1000).required(),
  image: joi.string().uri().required(),
});
