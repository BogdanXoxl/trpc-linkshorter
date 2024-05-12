-- AlterTable
ALTER TABLE "Link" ALTER COLUMN "expirationDate" SET DEFAULT (NOW() + '15 minutes'::interval);
