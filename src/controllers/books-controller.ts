import { Request, Response } from "express";
import { Book } from "../protocols/books-protocols.js";
import { createBook } from "../services/books-services.js";

export async function bookPost(req: Request, res: Response) {
  const body = req.body as Book;

  try {
    const data = await createBook(body.title, body.description, body.image);

    res.sendStatus(201);
  } catch (error) {
    if (error.name === "ConflictError") {
      return res.status(409).send(error);
    }

    console.log(error);
    res.sendStatus(500);
  }
}
