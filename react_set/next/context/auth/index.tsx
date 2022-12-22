import * as React from 'react';
import Router from 'next/router';
import { v4 as uuidv4 } from 'uuid';
// https://github.com/maticzav/nookies
import { parseCookies, setCookie, destroyCookie } from 'nookies';

interface AuthContextInterface {
    user: UserInterface,
    isAuthenticated: boolean,
    signIn: (data: SigInDataInterface) => void
}

interface SigInDataInterface {
    email: string,
    password: string
}

interface UserInterface {
    id: string,
    email: string,
    name: string,
    avatar: string
}

export const AuthContext = React.createContext({});

export function AuthProvider({ children }: { children: JSX.Element }) {

    const [user, setUser] = React.useState<UserInterface | null>(null);

    const isAuthenticated: boolean = !!user;

    function signIn({ email, password }: SigInDataInterface) {

        if (email !== 'admin@gmail.com' && password !== '12345') {
            throw new Error("Invalid Credentials");
        }

        // After successful login
        const token = uuidv4();
        const userAuthenticated = { id: '1', name: 'Admin', email: email, avatar: "/static/images/user.png" }

        // Set user authenticated data
        setUser(userAuthenticated);

        // Localstorage and document.cookie doesnt work with NextJs: https://dev.to/dendekky/accessing-localstorage-in-nextjs-39he
        setCookie(undefined, 'nextauth.token', token, {
            maxAge: 68 * 60 * 1, // 1 hour
        });

        Router.push("/dashboard");

    }

    return (
        <AuthContext.Provider value={{ user, signIn, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

// Hook
export function useAuth() {

    return React.useContext(AuthContext);

}