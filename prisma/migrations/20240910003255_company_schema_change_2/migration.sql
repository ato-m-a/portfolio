/*
  Warnings:

  - You are about to drop the column `description` on the `career` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "career" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "company" ADD COLUMN     "description" TEXT;
