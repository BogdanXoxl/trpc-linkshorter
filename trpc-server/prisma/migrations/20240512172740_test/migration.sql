-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "testDate" TIMESTAMP(3) NOT NULL DEFAULT (NOW()),
ALTER COLUMN "expirationDate" SET DEFAULT (NOW() + '15 minutes'::interval);
