import * as React from 'react';
// Context
import { useAuth } from '../../context/auth';

export default function Dashboard() {

    const { logout } = useAuth();

    return (
        <>
            <h1>DASHBOARD</h1>
            <button onClick={() => logout()}>Logout</button>
        </>
    )

}