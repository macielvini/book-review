import { Router } from "express";
import { bookPost, getAllBooks } from "../controllers/books-controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { bookSchema } from "../models/books-schema.js";

const bookRouter = Router();

bookRouter
  .post("/books", validateSchema(bookSchema), bookPost)
  .get("/books", getAllBooks);

export { bookRouter };
