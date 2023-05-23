import { PrismaClient } from "@prisma/client";
import { Code } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { id, itemId } = req.body;

  try {
    const cart = await prisma.cart.findUnique({
      where: {
        id,
      },
    });

    if (cart && cart.items.includes(itemId)) {
      return res.status(200).json(cart);
    }

    const updatedCart = await prisma.cart.update({
      where: {
        id,
      },
      data: {
        items: {
          push: itemId, // Assuming itemId is a string
        },
      },
    });

    res.status(200).json(updatedCart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating the cart." });
  }
}
