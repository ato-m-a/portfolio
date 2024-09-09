/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `career` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `portfolio` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `project` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `skill` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "career" DROP COLUMN "updatedAt",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "portfolio" DROP COLUMN "updatedAt",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "project" DROP COLUMN "updatedAt",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "skill" DROP COLUMN "updatedAt",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
