import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';

function About() {
  return (
    <div>
      <Head>
        <title>About | Ayumu</title>
        <meta name='description' content="Ayumu's PortfolioSite About"></meta>
      </Head>

      <Header />

      <h1>About</h1>
      <Link href='/'>
        <p>Index</p>
      </Link>
      <Link href='/home'>
        <p>Home</p>
      </Link>
      <Link href='/works'>
        <p>Works</p>
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

export default About;
