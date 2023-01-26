import { prisma } from "../src/database/server.js";

async function main() {
  const users = await prisma.user.createMany({
    data: [
      { image: "https://http.cat/307" },
      { image: "https://http.cat/409" },
    ],
  });
}
