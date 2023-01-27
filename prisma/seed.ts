import { prisma } from "../src/database/server.js";

async function main() {
  const users = await prisma.user.createMany({
    data: [
      { name: "John", image: "https://http.cat/307" },
      { name: "Alice", image: "https://http.cat/409" },
    ],
  });
}
