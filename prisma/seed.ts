import { prisma } from "../src/config/database";

async function main() {
  await prisma.user.upsert({
    where: { id: 0 },
    update: {},
    create: {
      image:
        "https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png",
      name: "Monkey D. Luffy",
      reviews: {
        create: [
          {
            book: {
              create: {
                description: "Boku no Hero - Manga - Vol 1",
                image: "https://m.media-amazon.com/images/I/71bELfIWTDL.jpg",
                title: "BNH - Vol1",
              },
            },
            comment: "I love it",
            rating: 4,
          },
          {
            book: {
              create: {
                description: "One Piece - Manga - Chapter 01",
                image: "https://m.media-amazon.com/images/I/71y+XnBXm4L.jpg",
                title: "One Piece - 01",
              },
            },
            comment: "Goat",
            rating: 5,
          },
        ],
      },
    },
  });

  await prisma.user.upsert({
    where: { id: 0 },
    update: {},
    create: {
      image:
        "https://i.pinimg.com/564x/6c/0b/25/6c0b252b8d6c90099f71b49c201c2f60.jpg",
      name: "Zoro",
      reviews: {
        create: [
          {
            book: {
              connect: { id: 1 },
            },
            comment: "Too soft for my taste",
            rating: 3,
          },
          {
            book: {
              connect: { id: 2 },
            },
            comment: "That's my show, sooo...",
            rating: 5,
          },
        ],
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
