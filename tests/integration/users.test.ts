import app from "app";
import supertest from "supertest";
import { cleanDb } from "../helpers";
import { createUser } from "../factories/users-factory";

const api = supertest(app);

beforeAll(async () => {
  await cleanDb();
});

beforeEach(async () => {
  await cleanDb();
});

afterAll(async () => {
  await cleanDb();
});

describe("POST /users", () => {
  it("Should respond with status 422 if body is not valid", async () => {
    const response = await api.post("/users").send({ name: "", image: "" });

    expect(response.status).toBe(422);
  });

  it("Should respond with status 200 and user data", async () => {
    const response = await api
      .post("/users")
      .send({ name: "faker", image: "https://faker-image.com" });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
      image: expect.any(String),
    });
  });

  it("Should respond with status 409 if user name already exists", async () => {
    const user = await createUser();
    const response = await api
      .post("/users")
      .send({ name: user.name, image: user.image });

    expect(response.status).toBe(409);
  });
});
