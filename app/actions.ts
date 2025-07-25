"use server";

import prisma from "@/lib/prisma";

export async function createClient() {
  const name = "salim";
  const phone = "0670 66 87 90";
  const locationId = 1;

  await prisma.client.create({
    data: {
      name,
      phone,
      location: {
        connect: [{ id: locationId }],
      },
    },
  });
}

export async function createLocation() {
  const locationDate = new Date();

  const idSuit = 1;
  const idShirt = 1;
  const idShoe = 1;
  const idAccessory = 1;

  await prisma.location.create({
    data: {
      location_date: locationDate,
      suit: {
        connect: [{ id: idSuit }],
      },
      shirt: {
        connect: [{ id: idShirt }],
      },
      shoe: {
        connect: [{ id: idShoe }],
      },
      accessory: {
        connect: [{ id: idAccessory }],
      },
    },
  });
}
