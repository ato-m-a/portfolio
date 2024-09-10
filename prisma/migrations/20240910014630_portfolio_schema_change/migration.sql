/*
  Warnings:

  - The primary key for the `portfolio` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `pathname` on the `project` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "project" DROP CONSTRAINT "FK_portfolio_pathname";

-- AlterTable
ALTER TABLE "portfolio" DROP CONSTRAINT "portfolio_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "portfolio_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "project" DROP COLUMN "pathname",
ADD COLUMN     "portfolio_id" INTEGER;

-- CreateIndex
CREATE INDEX "idx_portfolio_pathname" ON "portfolio"("pathname");

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "FK_portfolio_id" FOREIGN KEY ("portfolio_id") REFERENCES "portfolio"("id") ON DELETE SET NULL ON UPDATE CASCADE;
