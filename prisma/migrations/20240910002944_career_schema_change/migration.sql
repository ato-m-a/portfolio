/*
  Warnings:

  - You are about to drop the column `company_name` on the `career` table. All the data in the column will be lost.
  - You are about to drop the column `company_url` on the `career` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "career" DROP COLUMN "company_name",
DROP COLUMN "company_url",
ADD COLUMN     "company_id" INTEGER;

-- AddForeignKey
ALTER TABLE "career" ADD CONSTRAINT "FK_career_company_id" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
