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
