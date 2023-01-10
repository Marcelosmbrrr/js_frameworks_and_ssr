import type { NextApiRequest, NextApiResponse } from 'next';
// Prisma ORM
import { PrismaClient, Prisma } from '@prisma/client';
// Bcrypt 
import { hash } from 'bcryptjs';

const prisma = new PrismaClient()

/*
Documentation: https://nextjs.org/docs/api-routes/introduction
In essence, Next. js API Routes eliminate the need for creating an additional backend server in your full-stack web applications. 
With Next. js API Routes, you can access or store data in your database like you would if you were using a separate backend application
*/

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method == "GET") {

        const users = await prisma.user.findMany();

        if (!users) {
            res.status(404).send({ users: [], message: 'No user found.' });
        }

        res.status(200).json({ users: users, message: 'Users found.' })

    } else if (req.method == "POST") {

        const { name, email, password } = req.body;

        const user_already_exists = await prisma.user.findFirst({
            where: {
                email: email
            }
        });

        if (user_already_exists) {
            res.status(400).send({ message: 'Email already exists.' });
        }

        const password_hash = await hash(password, 8);

        const user = prisma.user.create({
            name: name,
            email: email,
            password: password_hash,
            profileId: 2
        });

        res.status(201).send({ user: user, message: 'Registration successful.' });

    }

}