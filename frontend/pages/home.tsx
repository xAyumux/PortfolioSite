import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';

function Home() {
  return (
    <div>
      <Head>
        <title>Home | Ayumu</title>
        <meta name='description' content="Ayumu's PortfolioSite Home"></meta>
      </Head>

      <Header />

      <h1>Home</h1>
      <Link href='/'>
        <h2>Index</h2>
      </Link>
      <Link href='/about'>
        <h2>About</h2>
      </Link>
      <Link href='/works'>
        <h3>Works</h3>
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

export default Home;
