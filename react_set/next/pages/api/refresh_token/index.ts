import type { NextApiRequest, NextApiResponse } from 'next';
// Prisma client
import { client as prisma } from '../../../prisma/client';
// JWT
import { verify } from 'jsonwebtoken';
// Providers
import { CreateRefreshTokenProvider } from '../../../providers/CreateRefreshTokenProvider';
import { CreateAccessTokenProvider } from '../../../providers/CreateAccessTokenProvider';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {

        const refresh_token_payload = verify(req.body.refresh_token, process.env.SECRET_JWT);

        if (!refresh_token_payload) {
            throw new Error('Unauthorized.');
        }

        // Find refresh token in DB and turn into invalid token
        const invalid_refresh_token = await prisma.refreshToken.update({
            where: {
                id: refresh_token_payload.id,
            },
            data: {
                is_valid: false
            },
        });

        // Create new Access Token
        const createAccessTokenProvider = new CreateAccessTokenProvider();
        const access_token_jwt = await createAccessTokenProvider.execute(invalid_refresh_token.userId);

        // Create new Refresh Token
        const createRefreshToken = new CreateRefreshTokenProvider();
        const refresh_token_jwt = await createRefreshToken.execute(invalid_refresh_token.userId);

        const user = prisma.user.findFirst({
            where: {
                id: invalid_refresh_token.userId
            }
        });

        res.status(200).send({
            access_token_jwt, refresh_token_jwt, user: {
                name: user.name,
                email: user.email,
                image: user.image,
                profileId: user.profileId
            }
        });

    } catch (error) {

        res.status(500).send({ message: error.message });

    }

}