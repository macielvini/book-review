# book-review

Review any book!

Anyone can:

- Add books
- Review and rate

## Technologies

- NodeJS
- Express
- TypeScript
- Prisma (easier to build and share a project and database)

## End-points

### users

- `POST /users`

  Create an user.

  body:

  ```json
  {
    "name": "user-name",
    "image": "image-url"
  }
  ```

  response:
  `201`

  ```json
  {
    "id": 1,
    "name": "user-name",
    "image": "image-url"
  }
  ```

### books

- `POST /books`
  Create a book.

  body:

  ```json
  "title": "title",
  "description": "description",
  "image": "image-url"
  ```

  response:
  `201`

- `GET /books`
  Get all books with it's average rating:
  response:

  ```json
  [
    {
      "id": 4,
      "title": "BNH - Vol1",
      "description": "Boku no Hero - Manga - Vol 1",
      "image": "https://m.media-amazon.com/images/I/71bELfIWTDL.jpg",
      "avgRating": 4.5
    },
    {
      "id": 3,
      "title": "One Piece - 01",
      "description": "One Piece - Manga - Chapter 01",
      "image": "https://m.media-amazon.com/images/I/71y+XnBXm4L.jpg",
      "avgRating": 5
    }
  ]
  ```

### reviews

- `POST /reviews`

  Create a book review

  body:

  ```json
  {
    "bookId": 1,
    "userId": 1,
    "comment": "comment",
    "rating": 4
  }
  ```

- `GET /reviews?user=1`

  Get a list of user's reviews

  response:

  ```json
  [
    {
      "id": 1,
      "bookId": 1,
      "userId": 1,
      "comment": "Very nice book",
      "rating": 5
    },
    {
      "id": 8,
      "bookId": 4,
      "userId": 1,
      "comment": "This is a review",
      "rating": 4
    }
  ]
  ```

## How to run

1. Install all dependencies

```

    npm i

```

2. Create a PostgrSQL database with any name
3. Configure the `.env` file using the `.env.example`
4. Run all migrations

```

npm run migration:run

```

5. Seed db

```

npm run seed

```

6. Run project

```

npm run dev

```

```

```
