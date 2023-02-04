import app from "app";
import supertest from "supertest";
import { cleanDb } from "../helpers";
import { createBook, createReview } from "../factories/books-factory";
import { Book } from "protocols/books-protocols";
import { BookReviewed } from "repositories/books-repository";
import { createUser } from "../factories/users-factory";

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

describe("GET /books", () => {
  it("Should respond with status 200 and books with review info", async () => {
    const user = await createUser();
    const book = await createBook();

    const response = await api.get("/books");

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          title: expect.any(String),
          description: expect.any(String),
          image: expect.any(String),
          review: expect.objectContaining({
            rating: expect.any(Number),
            count: expect.any(Number),
          }),
        }),
      ])
    );
  });
});
