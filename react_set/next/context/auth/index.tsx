import * as React from 'react';
import Router from 'next/router';
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

            // Check if cookie already expire
            // If yes, refresh, if not, continue

            console.log('auth context: already authenticated!')
        }

    }, []);

    /*
    * - Do login routine
    * - Get by response the user data and JWT access token
    * - Set state with user data and cookie with JWT - to be used in page refresh and to check login
    * - Set axios header authorization with JWT - to check user authorization in api routes
    * - Redirect to dashboard
    */
    async function signIn(data: SigInDataInterface) {

        try {

            const response = await axios.post('/api/login', {
                email: data.email,
                password: data.password
            });

            setUser(response.data.user);

            // Localstorage and document.cookie doesnt work with NextJs: https://dev.to/dendekky/accessing-localstorage-in-nextjs-39he

            // The access token is stored in client side with this cookie
            // The access token cookie is set with a short expiry time to ensure that is only used during an active session and needs to be refreshed frequently.
            setCookie(undefined, 'access_token', response.data.access_token_jwt, {
                maxAge: 60, // seconds
            });

            // The refresh token is stored in client side with this cookie
            // The refresh token cookie generally has a longer expiration time. This ensures that the user does not have to log in again to renew the access token.
            setCookie(undefined, 'refresh_token', response.data.refresh_token_jwt, {
                maxAge: 7 * (60 * 60 * 24), // 7 days (seconds)
            });

            // Put the access token hash in the axios header authorization
            axios.defaults.headers['Authorization'] = `Bearer ${response.data.access_token_jwt}`;

            Router.push("/dashboard");

        } catch (error) {

            throw error;

        }

    }

    /*
    * - Find cookie and delete it
    * - Find authorization header and delete it
    * - Request server to delete refresh token
    */
    async function logout() {

        const cookies = parseCookies();
        const cookie = cookies['access_token'];

        if (cookie) {

            // Invalidate refresh token
            //await axios.post('/api/logout');

            delete axios.defaults.headers.common["Authorization"];

            destroyCookie(null, 'access_token');
            destroyCookie(null, 'refresh_token');

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