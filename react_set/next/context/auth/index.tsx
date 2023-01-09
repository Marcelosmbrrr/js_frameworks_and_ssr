import * as React from 'react';
import Router from 'next/router';
// UUID lib
import { v4 as uuidv4 } from 'uuid';
// Cookies methods
import { parseCookies, setCookie, destroyCookie } from 'nookies'; // From nookies lib - https://github.com/maticzav/nookies
// Axios
import { api as axios } from '../../services/api';

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
            // In real situation, the cookie will have the user ID
            // With the ID, user data will be retrieved from database

            // With the ID and token UUID his data will be requested again to the server
            // The data will be retrieved
            // The context will be updated with the data
            console.log('auth context: already authenticated!')
        }

    }, []);

    async function signIn(data: SigInDataInterface) {

        try {

            const response = await axios.post('/api/login', {
                email: data.email,
                password: data.password
            });

            // Set user authenticated data
            setUser(response.data.user);

            // Localstorage and document.cookie doesnt work with NextJs: https://dev.to/dendekky/accessing-localstorage-in-nextjs-39he
            //setCookie(undefined, 'nextauth', JSON.stringify({ token: response.data.token, userID: response.data.user.id }), {
                //maxAge: 68 * 60 * 1, // 1 hour
            //});

            // Save token UUID in the axios headers - for backend requests - JWT
            //axios.defaults.headers['Authorization'] = `Bearer ${token}`;

            //Router.push("/dashboard");

        } catch (error) {

            throw error;

        }

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