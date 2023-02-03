import { Router } from "express";
import { userPost } from "../controllers/users-controller";
import { validateSchema } from "../middlewares/validateSchema";
import { userSchema } from "../models/users-schema";

const userRouter = Router();

userRouter.post("/users", validateSchema(userSchema), userPost);

export { userRouter };
