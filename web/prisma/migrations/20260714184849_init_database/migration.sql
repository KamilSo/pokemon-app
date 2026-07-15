-- CreateEnum
CREATE TYPE "CardCondition" AS ENUM ('NEAR_MINT', 'LIGHTLY_PLAYED', 'MODERATELY_PLAYED', 'HEAVILY_PLAYED', 'DAMAGED');

-- CreateEnum
CREATE TYPE "PriceSource" AS ENUM ('EBAY', 'TCGPLAYER', 'CARDMARKET', 'MANUAL');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "pokemonTcgId" TEXT,
    "name" TEXT NOT NULL,
    "supertype" TEXT,
    "subtypes" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "types" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "setId" TEXT,
    "setName" TEXT,
    "setSeries" TEXT,
    "number" TEXT,
    "rarity" TEXT,
    "artist" TEXT,
    "imageSmall" TEXT,
    "imageLarge" TEXT,
    "pokemonTcgUpdatedAt" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollectionItem" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cardId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "condition" "CardCondition" NOT NULL DEFAULT 'NEAR_MINT',
    "isGraded" BOOLEAN NOT NULL DEFAULT false,
    "gradingCompany" TEXT,
    "grade" DECIMAL(3,1),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CollectionItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PriceSnapshot" (
    "id" TEXT NOT NULL,
    "cardId" TEXT NOT NULL,
    "source" "PriceSource" NOT NULL,
    "region" TEXT NOT NULL DEFAULT 'UK',
    "currency" TEXT NOT NULL DEFAULT 'GBP',
    "price" DECIMAL(10,2) NOT NULL,
    "capturedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PriceSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Card_pokemonTcgId_key" ON "Card"("pokemonTcgId");

-- CreateIndex
CREATE INDEX "Card_name_idx" ON "Card"("name");

-- CreateIndex
CREATE INDEX "Card_setName_idx" ON "Card"("setName");

-- CreateIndex
CREATE INDEX "CollectionItem_userId_idx" ON "CollectionItem"("userId");

-- CreateIndex
CREATE INDEX "CollectionItem_cardId_idx" ON "CollectionItem"("cardId");

-- CreateIndex
CREATE INDEX "PriceSnapshot_cardId_capturedAt_idx" ON "PriceSnapshot"("cardId", "capturedAt");

-- CreateIndex
CREATE INDEX "PriceSnapshot_source_region_currency_idx" ON "PriceSnapshot"("source", "region", "currency");

-- AddForeignKey
ALTER TABLE "CollectionItem" ADD CONSTRAINT "CollectionItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionItem" ADD CONSTRAINT "CollectionItem_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceSnapshot" ADD CONSTRAINT "PriceSnapshot_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;
