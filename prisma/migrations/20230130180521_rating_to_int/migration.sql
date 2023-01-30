/*
  Warnings:

  - You are about to alter the column `rating` on the `reviews` table. The data in that column could be lost. The data in that column will be cast from `Decimal(2,1)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "reviews" ALTER COLUMN "rating" SET DEFAULT 0,
ALTER COLUMN "rating" SET DATA TYPE INTEGER;
