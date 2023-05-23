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

  const { userId, totalItems, totalPrice } = req.query;

  try {
    const payment = await prisma.payment.create({
      data: {
        userId: userId as string,
        totalItems: parseInt(totalItems as string),
        totalPrice: parseInt(totalPrice as string)
      }
    });

    if (payment) {
      res.status(200).json(payment);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while searching for user cart items.' });
  }
}
