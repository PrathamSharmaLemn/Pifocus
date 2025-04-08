import '../styles/global.css'; // Make sure this path is correct
import { AppProps } from 'next/app';
import Head from 'next/head';
import { GoogleOAuthProvider } from '@react-oauth/google';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <GoogleOAuthProvider clientId='1072886259148-0pijp3g4009q2885au3uc9koqbt62tqg.apps.googleusercontent.com'>
            <Head>
                <title>PiBook</title>
                <link rel="icon" href="/Logo.svg" />
            </Head>
            
            <Component {...pageProps} />
            </GoogleOAuthProvider>
        </div>
    )
}

export default MyApp;
