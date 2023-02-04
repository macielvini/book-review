import express from "express";
import cors from "cors";

import { userRouter } from "./routers/user-router";
import { bookRouter } from "./routers/book-router";
import { reviewsRouter } from "./routers/reviews-router";

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRouter).use(bookRouter).use(reviewsRouter);

export default app;
