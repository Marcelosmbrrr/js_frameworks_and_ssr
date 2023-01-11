import { client as prisma } from '../prisma/client';
import dayjs from 'dayjs';
// JWT
import { sign } from 'jsonwebtoken';

/*
- This class is used to create an refresh token
- Its used to recreat a access token after it expires
- The refresh token is created when:

1 - user does login, being created with an access token;
2 - access token expires and need to be recreated - refresh token "refresh" the access token data;
*/

export class CreateRefreshTokenProvider {

    async execute(userId: number) {

        const expiresIn = dayjs().add(7, "days").unix();

        const new_refresh_token = await prisma.refreshToken.create({
            data: {
                userId: userId,
                expiresIn
            }
        });

        const refresh_token_jwt = sign({}, process.env.SECRET_JWT, {
            subject: new_refresh_token.id,
            expiresIn: "7d"
        });

        return refresh_token_jwt;
    }

}