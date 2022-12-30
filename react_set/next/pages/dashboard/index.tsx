import * as React from 'react';
// Layout
import Layout from '../../components/Layout';
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
        <Layout>
            <h1>DASHBOARD</h1>
            <button onClick={() => logout()}>Logout</button>
        </Layout>
    )

}