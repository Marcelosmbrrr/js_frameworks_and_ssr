import { RequestCookie } from 'next/dist/server/web/spec-extension/cookies';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface SignInRequestInterface {
    email: string,
    password: string
}

interface CookieInterface {
    token: {
        uuid: string,
        userID: string
    },
    user: {
        id: string,
        name: string,
        email: string,
        avatar: string,
    }
}

const delaySimulation = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount));

// Function to to the sign in process
export async function signInRequest({ email, password }: SignInRequestInterface) {

    await delaySimulation();

    // In real situation, user will be search in the DB
    if (email !== process.env.login.email && password !== process.env.login.password) {
        throw new Error("Email or password incorrect.");
    }

    // If exists, the necessary data will be selected in the DB
    return {
        token: {
            uuid: uuidv4(),
            userID: '1'
        },
        user: {
            id: '1',
            name: 'Admin',
            email: email,
            avatar: "/static/images/user.png"
        }
    }

}

// Function to recover user authenticated when refresh the page
export async function recoverUserInformation(cookie: CookieInterface) {

    await delaySimulation();

    // In real situation, the cookie will have the user ID
    console.log('recoverUserInformation')
    console.log(cookie)
    console.log('----------------------')

    // With the ID and token UUID his data will be requested again to the server
    const user_data_from_db = {
        id: '1',
        name: 'Admin',
        email: 'admin@gmail.com',
        avatar: "/static/images/user.png"
    };

    return {
        user: user_data_from_db
    }
}
