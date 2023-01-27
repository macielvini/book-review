import { prisma } from "../src/database/server.js";

async function main() {
  await prisma.user.createMany({
    data: [
      { name: "john green", image: "https://http.cat/401" },
      { name: "alice brown", image: "https://http.cat/404" },
    ],
  });

  await prisma.review.upsert({
    where: { id: 2 },
    update: {},
    create: {
      comment: "very nice book",
      rating: 5,
      book: {
        create: {
          description: "learn any script",
          image: "https://http.cat/307",
          title: "BookScript",
        },
      },
      user: {
        connect: { id: 1 },
      },
    },
  });

  await prisma.review.upsert({
    where: { id: 2 },
    update: {},
    create: {
      comment: "not so cool but ok",
      rating: 3,
      book: {
        create: {
          description: "two cats were fighting for nothing",
          image: "https://http.cat/409",
          title: "CatFight",
        },
      },
      user: {
        connect: { id: 2 },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
