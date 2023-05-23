import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
)
    {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
    }

  const { userId } = req.query;

  try {
    const cart = await prisma.cart.findUnique({
      where: {
        userId: userId as string,
      },
    });

    if (cart) {
      res.status(200).json(cart);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while searching for user cart items.' });
  }
}
