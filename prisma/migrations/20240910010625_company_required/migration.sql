/*
  Warnings:

  - Made the column `company_id` on table `career` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "career" DROP CONSTRAINT "FK_career_company_id";

-- AlterTable
ALTER TABLE "career" ALTER COLUMN "company_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "career" ADD CONSTRAINT "FK_career_company_id" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
