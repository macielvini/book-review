import { Request, Response } from "express";
import { Book } from "../protocols/books-protocols";
import { createBook, findAllBooks } from "../services/books-services";

export async function bookPost(req: Request, res: Response) {
  const body = req.body as Book;

  try {
    const data = await createBook(body);

    res.sendStatus(201);
  } catch (error) {
    if (error.name === "ConflictError") {
      return res.status(409).send(error);
    }

    console.log(error);
    res.sendStatus(500);
  }
}

export async function getAllBooks(req: Request, res: Response) {
  try {
    const data = await findAllBooks();

    res.send(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
