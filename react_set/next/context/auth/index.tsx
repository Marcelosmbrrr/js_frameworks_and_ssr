import * as React from 'react';
import Router from 'next/router';
// UUID lib
import { v4 as uuidv4 } from 'uuid';
// Cookies methods
import { parseCookies, setCookie, destroyCookie } from 'nookies'; // From nookies lib - https://github.com/maticzav/nookies
// Methods
import { recoverUserInformation, signInRequest } from '../../services/auth';
// Axios configured
import { api } from '../../services/api';

interface AuthContextInterface {
    user: UserInterface,
    isAuthenticated: boolean,
    signIn: (data: SigInDataInterface) => void,
    logout: () => void
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
        const cookie = cookies['nextauth'];

        if (cookie) {
            recoverUserInformation(JSON.parse(cookie)).then(response => setUser(response.user))
        }

    }, []);

    async function signIn(data: SigInDataInterface) {

        const { token, user } = await signInRequest(data);

        // Set user authenticated data
        setUser(user);

        // Localstorage and document.cookie doesnt work with NextJs: https://dev.to/dendekky/accessing-localstorage-in-nextjs-39he
        setCookie(undefined, 'nextauth', JSON.stringify({ token: token, userID: user.id }), {
            maxAge: 68 * 60 * 1, // 1 hour
        });

        // Save token UUID in the axios headers - for backend requests - JWT
        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        Router.push("/dashboard");

    }

    async function logout() {

        const cookies = parseCookies();
        const cookie = cookies['nextauth'];

        if (cookie) {

            destroyCookie(null, 'nextauth');
            setUser(null);

            Router.push("/login");

        }

    }

    return (
        <AuthContext.Provider value={{ user, signIn, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

// Hook
export function useAuth() {

    return React.useContext(AuthContext);

}