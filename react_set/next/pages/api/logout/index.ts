import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
// Prisma client
import { client as prisma } from '../../../prisma/client';
// JWT verify
import { verify } from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {

        const bearerToken = req.cookies.access_token;

        if (!bearerToken) {
            throw new Error('Unauthorized.');
        }

        const access_token_payload = verify(bearerToken, process.env.SECRET_JWT);

        // Find refresh token in DB and turn into invalid token
        await prisma.refreshToken.update({
            where: {
                id: access_token_payload.userId,
            },
            data: {
                is_valid: false
            },
        });

        res.status(200).send({ message: 'Logout successful.' });

    } catch (error) {

        res.status(500).send({ message: error.message });

    }

}