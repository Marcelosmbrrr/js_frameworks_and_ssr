import * as React from 'react';
// Axios
import { api as axios } from '../../services/api';
// Nookies
import { parseCookies } from 'nookies';
// Layout
import Layout from '../../components/Layout';

export default function Dashboard({ data }) {

    React.useEffect(() => {
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
// Context or ctx is a object with: pathname, query, req, res, err and asPath
export async function getServerSideProps(context: any) {

    // Instead of using useEffect for check cookie at same time that component is rendering...
    // Here, the routine is done server side, it is, before any client side render

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

    const response = await axios.get('/api/users');

    try {

        const response = await axios.get('/api/users');

        return {
            props: {
                data: response.data
            },
        }

    } catch (error) {

        return {
            props: {
                data: {}
            },
        }

    }




}