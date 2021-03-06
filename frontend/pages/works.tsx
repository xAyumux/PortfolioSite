import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';

function Works() {
  return (
    <div>
      <Head>
        <title>Works | Ayumu</title>
        <meta name='description' content="Ayumu's PortfolioSite Works"></meta>
      </Head>

      <Header />

      <h1>Works</h1>
      <Link href='/'>
        <p>Index</p>
      </Link>
      <Link href='/home'>
        <p>Home</p>
      </Link>
      <Link href='/about'>
        <p>About</p>
      </Link>

      <h2>改行</h2>
      <p>改行</p>
      <p>改行</p>
      <p>改行</p>
      <p>改行</p>
      <p>改行</p>
      <p>改行</p>
      <p>改行</p>
      <p>改行</p>
      <p>改行</p>
      <p>改行</p>
      <p>改行</p>
      <p>改行</p>
      <p>改行</p>
      <p>改行</p>
      <p>改行</p>
    </div>
  );
}

export default Works;
