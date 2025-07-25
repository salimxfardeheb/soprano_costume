import { PrismaClient, Prisma } from "../app/generated/prisma";

const prisma = new PrismaClient();

const SuitData: Prisma.SuitCreateInput[] = [
  {
    model: "1",
    type: "mariage",
    blazerSize: ["48", "50", "52", "54", "56", "58"],
    vestSize: ["48", "50", "52", "54", "56", "58"],
    pantSize: ["48", "50", "52", "54", "56", "58"],
  },
  {
    model: "2",
    type: "invite",
    blazerSize: ["48", "50", "52", "54", "56", "58"],
    vestSize: ["48", "50", "52", "54", "56", "58"],
    pantSize: ["48", "50", "52", "54", "56", "58"],
  },
];

const shirtData: Prisma.ShirtCreateInput[] = [
  {
    type: "papillion",
    color: "white",
    size: ["s", "m", "l", "xl"],
  },
  {
    type: "cravatte",
    color: "white",
    size: ["s", "m", "l", "xl"],
  },
  {
    type: "cravatte",
    color: "black",
    size: ["s", "m", "l", "xl"],
  },
];

const shoeData: Prisma.ShoeCreateInput[] = [
  {
    model: "zara",
    size: ["40", "41", "42", "43", "44", "45"],
  },
  {
    model: "jsp",
    size: ["40", "41", "42", "43", "44", "45"],
  },
];

const accessoryData: Prisma.AccessoryCreateInput[] = [
  { label: "papillion noir" },
  { label: "cravatte rouge" },
  { label: "ceinture" },
  { label: "montre" },
];

export async function main() {
  for (const suit of SuitData) {
    await prisma.suit.create({ data: suit });
  }
  for (const shirt of shirtData) {
    await prisma.shirt.create({ data: shirt });
  }
  for (const shoe of shoeData) {
    await prisma.shoe.create({ data: shoe });
  }
  for (const accessory of accessoryData) {
    await prisma.accessory.create({ data: accessory });
  }
}

main();
