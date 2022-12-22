import * as React from 'react';
import Router from 'next/router';
import { v4 as uuidv4 } from 'uuid';
// https://github.com/maticzav/nookies
import { parseCookies, setCookie, destroyCookie } from 'nookies';
// Method to signIn
import { signInRequest, recoverUserInformation } from '../../services/auth';

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

    // To check if user is already authenticated
    React.useEffect(() => {

        const cookies = parseCookies();
        const token = cookies['nextauth.token'];

        if (token) {
            recoverUserInformation(token).then(response => setUser(response.user))
        }

    }, []);

    async function signIn(data: SigInDataInterface) {

        const { token, user } = await signInRequest(data);

        // Set user authenticated data
        setUser(user);

        // Localstorage and document.cookie doesnt work with NextJs: https://dev.to/dendekky/accessing-localstorage-in-nextjs-39he
        setCookie(undefined, 'nextauth.token', JSON.stringify(token), {
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