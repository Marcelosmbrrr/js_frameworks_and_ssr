import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface SignInRequestInterface {
    email: string,
    password: string
}

const delaySimulation = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount));

// Function to to the sign in process
export async function signInRequest({ email, password }: SignInRequestInterface) {

    await delaySimulation();

    // In real situation, user will be search in the DB
    if (email !== 'admin@gmail.com' && password !== '12345') {
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
export async function recoverUserInformation(token: string) {

    await delaySimulation();

    // In real situation, the cookie will have the user ID
    const userID = JSON.parse(token).userID;

    // With the ID his data will be requested again
    const data = {
        id: '1',
        name: 'Admin',
        email: 'admin@gmail.com',
        avatar: "/static/images/user.png"
    };

    return {
        user: data
    }
}
