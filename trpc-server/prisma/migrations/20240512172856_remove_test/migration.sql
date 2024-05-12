/*
  Warnings:

  - You are about to drop the column `testDate` on the `Link` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Link" DROP COLUMN "testDate",
ALTER COLUMN "expirationDate" SET DEFAULT (NOW() + '15 minutes'::interval);
