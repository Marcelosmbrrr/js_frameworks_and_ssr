import * as React from 'react';
// Layout
import Layout from '../../components/Layout';

export default function MyProfile() {

    // Fetch server to get some data
    React.useEffect(() => {
        //api.get("/example");
    }, []);

    return (
        <Layout>
            <h1>MY PROFILE</h1>
        </Layout>
    )

}