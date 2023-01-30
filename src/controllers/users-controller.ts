import { User } from "@prisma/client";
import { Request, Response } from "express";
import { createUser } from "../services/users-services.js";

export async function userPost(req: Request, res: Response) {
  const body = req.body as User;

  try {
    const data = await createUser(body);

    res.status(201).send(data);
  } catch (error) {
    console.log(error);

    if (error.name === "ConflictError") {
      return res.status(409).send(error);
    }

    res.sendStatus(500);
  }
}
