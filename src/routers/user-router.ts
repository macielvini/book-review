import { Router } from "express";
import { userPost } from "../controllers/users-controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { userSchema } from "../models/users-schema.js";

const userRouter = Router();

userRouter.post("/users", validateSchema(userSchema), userPost);

export { userRouter };
