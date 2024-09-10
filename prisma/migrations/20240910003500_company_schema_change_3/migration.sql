/*
  Warnings:

  - Made the column `description` on table `company` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "company" ALTER COLUMN "description" SET NOT NULL;
