import '../styles/global.css'; // Make sure this path is correct
import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>PiBook</title>
                <link rel="icon" href="/Logo.svg" />
            </Head>
            
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp;
