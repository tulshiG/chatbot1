import Head from 'next/head';
import ChatBot from '../components/ChatBot';

export default function Home() {
  return (
    <>
      <Head>
        <title>Unified Credit AI ChatBot</title>
      </Head>
      <main>
        <ChatBot />
      </main>
    </>
  );
}
