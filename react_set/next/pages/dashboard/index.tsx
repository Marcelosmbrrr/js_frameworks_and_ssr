import * as React from 'react';
// Context
import { useAuth } from '../../context/auth';
// Axios configurec
import { api } from '../../services/api';

export default function Dashboard() {

    const { logout } = useAuth();

    // Fetch server to get some data
    React.useEffect(() => {
        //api.get("/example");
    }, []);

    return (
        <>
            <h1>DASHBOARD</h1>
            <button onClick={() => logout()}>Logout</button>
        </>
    )

}