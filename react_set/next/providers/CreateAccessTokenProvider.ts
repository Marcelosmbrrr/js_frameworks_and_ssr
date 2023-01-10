// JWT
import { sign } from 'jsonwebtoken';

/*
- This class is used to create an access token 
- Its used to access protected routes and to login without credentials
- The access token is created when:

1 - user does login, being, created with a refresh token;
2 - token expires and need to be recreated;
*/

export class CreateAccessTokenProvider {

    async execute(userId: number) {

        const access_token = sign({}, process.env.SECRET_JWT, {
            subject: userId.toString(),
            expiresIn: "20s"
        });

        return access_token;
    }

}