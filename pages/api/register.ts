import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "../../lib/prismadb";
import { ObjectId } from "mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { email, name, password, nis } = req.body;
    if(!email || !name || !password || !nis) return res.status(400).json({ error: "Required fields (email / name / password / nis) is missing." });
    const existingUser = await prismadb.user.findUnique({ where: {nis: nis} });
    if (existingUser) return res.status(422).json({ error: "Email has been taken by another user." });

    const hashedPassword = await bcrypt.hash(password, 12);

    const cart = await prismadb.cart.create({
      data: {
        userId: new ObjectId().toHexString(),
      },
    });

    const user = await prismadb.user.create({
      data: {
        nis: nis,
        email: email,
        name: name,
        hashedPassword: hashedPassword,
        emailVerified: new Date(),
        cart: cart.id,
      },
    });

    await prismadb.cart.update({
      where: { id: cart.id },
      data: { userId: user.id },
    });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}