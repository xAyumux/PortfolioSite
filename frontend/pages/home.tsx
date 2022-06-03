import Head from 'next/head';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <Head>
        <title>Home | Ayumu</title>
        <meta name='description' content="Ayumu's PortfolioSite Home"></meta>
      </Head>
      <h1>Home</h1>
      <Link href='/'>
        <p>Index</p>
      </Link>
      <Link href='/about'>
        <p>About</p>
      </Link>
      <Link href='/works'>
        <p>Works</p>
      </Link>
      <Link href='/blog'>
        <p>Blog</p>
      </Link>
    </div>
  );
}

export default Home;
