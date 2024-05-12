-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "shortLink" TEXT NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Link_href_key" ON "Link"("href");

-- CreateIndex
CREATE UNIQUE INDEX "Link_shortLink_key" ON "Link"("shortLink");
