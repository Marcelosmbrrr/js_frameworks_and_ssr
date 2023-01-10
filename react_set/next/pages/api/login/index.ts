import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
// Prisma client
import { client as prisma } from '../../../prisma/client';
// JWT
import { sign } from 'jsonwebtoken';
// Bcrypt
import { compare } from 'bcryptjs';
// Providers
import { CreateRefreshTokenProvider } from '../../../providers/CreateRefreshTokenProvider';
import { CreateAccessTokenProvider } from '../../../providers/CreateAccessTokenProvider';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {

        const user_already_exists = await prisma.user.findFirst({
            where: {
                email: req.body.email
            }
        });

        if (!user_already_exists) {
            throw new Error('Email or password incorrect.');
        }

        const password_match = compare(req.body.password, user_already_exists.password);

        if (!password_match) {
            throw new Error('Email or password incorrect.');
        }

        // Create access token
        // This token expires and is needed to access protected routes
        // Futhermore, can be used to login without credentials while exists
        const createAccessTokenProvider = new CreateAccessTokenProvider();
        const access_token = await createAccessTokenProvider.execute(user_already_exists.id);

        // Create Refresh Token
        // This token is needed to create another access token after it expires
        const createRefreshToken = new CreateRefreshTokenProvider();
        const refresh_token = await createRefreshToken.execute(user_already_exists.id);

        res.status(200).send({
            access_token, user: {
                name: user_already_exists.name,
                email: user_already_exists.email,
                image: user_already_exists.image,
                profileId: user_already_exists.profileId
            }
        });

    } catch (error) {

        res.status(404).send({ message: error.message });

    }

}