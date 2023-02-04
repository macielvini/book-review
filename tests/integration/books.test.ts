import app from "app";
import supertest from "supertest";
import { cleanDb } from "../helpers";
import { createBook } from "../factories/books-factory";
import { Book } from "protocols/books-protocols";

beforeAll(async () => {
  cleanDb();
});

beforeEach(async () => {
  cleanDb();
});

afterAll(async () => {
  cleanDb();
});

const api = supertest(app);

describe("POST /books", () => {
  it("Should respond with status 422 if body is invalid", async () => {
    const response = await api
      .post("/books")
      .send({ title: "", description: "", image: "" });

    expect(response.status).toBe(422);
  });

  it("Should respond with status 409 if book title already exists", async () => {
    const book = await createBook();

    // console.log(book);
    const response = await api.post("/books").send({
      title: book.title,
      description: book.description,
      image: book.image,
    });

    expect(response.status).toBe(409);
  });

  it("Should respond with status 201", async () => {
    const response = await api.post("/books").send({
      title: "Book Title",
      description: "Book description",
      image: "https://book-image.com",
    } as Book);

    expect(response.status).toBe(201);
  });
});
