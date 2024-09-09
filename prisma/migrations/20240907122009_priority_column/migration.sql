/*
  Warnings:

  - You are about to drop the column `order_index` on the `project` table. All the data in the column will be lost.
  - Added the required column `priority` to the `project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order_index` to the `skill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "project" DROP COLUMN "order_index",
ADD COLUMN     "priority" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "skill" ADD COLUMN     "order_index" INTEGER NOT NULL;
