-- CreateTable
CREATE TABLE "Suit" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "blazerSize" TEXT[],
    "vestSize" TEXT[],
    "pantSize" TEXT[],
    "locationId" INTEGER,

    CONSTRAINT "Suit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shirt" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT[],
    "locationId" INTEGER,

    CONSTRAINT "Shirt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shoe" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "size" TEXT[],
    "locationId" INTEGER,

    CONSTRAINT "Shoe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Accessory" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "LocationId" INTEGER,

    CONSTRAINT "Accessory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "location_date" TIMESTAMP(3) NOT NULL,
    "clientId" INTEGER,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Suit" ADD CONSTRAINT "Suit_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shirt" ADD CONSTRAINT "Shirt_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shoe" ADD CONSTRAINT "Shoe_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Accessory" ADD CONSTRAINT "Accessory_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;
