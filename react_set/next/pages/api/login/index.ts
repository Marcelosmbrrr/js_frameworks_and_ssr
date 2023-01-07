import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
// Prisma ORM
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {

        const user = await prisma.user.findFirstOrThrow({
            where: {
                email: req.body.email,
                password: req.body.password
            },
            select: {
                id: true,
                name: true,
                email: true,
                password: false,    
            }
        });

        const data = {
            token: uuidv4(),
            user: user
        };

        res.status(200).send({ data });

    } catch (error) {

        console.log(error)

        res.status(404).send({ message: 'Email or password incorrect.' });

    }

}