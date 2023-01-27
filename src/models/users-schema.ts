import joi from "joi";

export const userSchema = joi.object({
  name: joi.string().required().max(100),
  image: joi.string().uri().required(),
});
