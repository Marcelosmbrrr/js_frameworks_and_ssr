import * as React from 'react';
// Layout
import Layout from '../../components/Layout';

export default function Dashboard() {

    // Fetch server to get some data
    React.useEffect(() => {
        //api.get("/example");
    }, []);

    return (
        <Layout>
            <h1>DASHBOARD</h1>
        </Layout>
    )

}