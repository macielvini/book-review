import express from "express";
import cors from "cors";

import { userRouter } from "./routers/user-router.js";
import { bookRouter } from "./routers/book-router.js";
import { reviewsRouter } from "./routers/reviews-router.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRouter).use(bookRouter).use(reviewsRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
