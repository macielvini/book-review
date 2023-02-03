import { Router } from "express";
import { bookPost, getAllBooks } from "../controllers/books-controller";
import { validateSchema } from "../middlewares/validateSchema";
import { bookSchema } from "../models/books-schema";

const bookRouter = Router();

bookRouter
  .post("/books", validateSchema(bookSchema), bookPost)
  .get("/books", getAllBooks);

export { bookRouter };
