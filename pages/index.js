import Head from 'next/head';
import { useEffect,useState } from 'react';
import styles from '../styles/Home.module.css';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Banner1 from '../components/banner1/Banner1'
import Banner2 from '../components/banner2/Banner2'
import Banner3 from '../components/banner3/Banner3'
import Banner4 from '../components/banner4/Banner4'
import Banner5 from '../components/banner5/Banner5'
import Banner6 from '../components/banner6/Banner6'
import Banner7 from '../components/banner7/Banner7'
import Banner8 from '../components/banner8/Banner8';
import ChatWithUs from '../components/chatWithUs/ChatWithUs';
import 'tailwindcss/tailwind.css'
import React from 'react';



export default function Home() {
  const [showChat, setShowChat] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Adjust the threshold as needed
        setShowChat(true);
      } else {
        setShowChat(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <div className={styles.container}>
      <Head>
        <title>Pi Book</title>
        <link rel="icon" href="/Logo.svg" />
      </Head>

      <Header showBuyNow={showChat} />
      <main className='bg-bgColor'>
        {showChat && <ChatWithUs />}
        <Banner1 />
        <Banner2 />
        <Banner3 />
        <Banner4 />
        <Banner5 />
        <Banner6 />
        <Banner7 />
        <Banner8 />
      </main>

      <Footer />

    </div>

  );
}
