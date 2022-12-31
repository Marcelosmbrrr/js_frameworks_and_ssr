import * as React from 'react';
// Axios
import { api as axios } from '../../services/api';
// Nookies
import { parseCookies } from 'nookies';
// Layout
import Layout from '../../components/Layout';

export default function Dashboard({ data }) {

    React.useEffect(() => {
        // In a pure React app, the cookie validation would have to be done here
        // Now, useEffect, being client side, occurs after the server side routines
        // So, here, the "data" returned by "getServerSideProps" will already exists
        console.log(data);
    })

    return (
        <Layout>
            <h1>DASHBOARD</h1>
        </Layout>
    )

}

// Docs: https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
// Docs: https://nextjs.org/docs/api-reference/data-fetching/get-initial-props#context-object
export async function getServerSideProps(context: any) {
    //console.log(context)

    // Instead of using useEffect for check cookie at same time that component is rendering...
    // Here, the routine is made server side, it is, before any client side render

    // This function, parseCookies, without the content is for client side - the cookie will be search in the browser!
    // But, being this a server side routine, the browser apis are not available
    // So, inside the context object - see more about in the docs -, the server can find the cookies 
    const cookies = parseCookies(context);
    const cookie = cookies['nextauth'];

    if (!cookie) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    const data = await axios.get('/api/users');

    return {
        props: { data }, // will be passed to the page component as props
    }
}