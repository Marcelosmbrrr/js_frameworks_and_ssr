import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
// Prisma ORM
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method !== "POST") {
        return res.status(405).json({ message: 'Method now allowed.' });
    }

    const user = await prisma.user.findFirst({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })

    if (!user) {
        return res.status(404).json({ message: 'Email or password incorrect.' });
    }

    const data = {
        token: uuidv4(),
        user: user
    };

    return res.status(200).json({ data: data, message: '' });

}