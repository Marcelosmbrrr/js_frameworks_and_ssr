import { client as prisma } from '../prisma/client';
import dayjs from 'dayjs';

/*
- This class is used to create an refresh token
- Its used to recreat a access token after it expires
- The refresh token is created when:

1 - user does login, being created with an access token;
2 - access token expires and need to be recreated - refresh token "refresh" the access token data;
*/

export class CreateRefreshTokenProvider {

    async execute(userId: number) {

        const expiresIn = dayjs().add(20, "seconds").unix();

        const create_refresh_token = await prisma.refreshToken.create({
            data: {
                userId: userId,
                expiresIn
            }
        });

        return create_refresh_token;
    }

}